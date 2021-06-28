import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchCategories} from "../.././redux/actions/categories";
import {fetchGoodsSection, fetchGoodsType} from "../../redux/actions/goods";
import {addGoodsCart, statusGoodsPush} from "../../redux/actions/cart";
import {fetchTeacher} from "../.././redux/actions/teacher";

import ShopBlock from "./ShopBlock";
import ShopBlockLoading from "./ShopBlockLoading";
import ShopSectionBtn from "./ShopSectionBtn";

const ShopSection = React.memo(({style}) => {
    const dispatch = useDispatch();

    const categories = useSelector(({categories}) => categories.items);
    const {isLoaded, types} = useSelector(({goods}) => goods);
    const teachers = useSelector(({teacher}) => teacher.items);
    const items = useSelector(({goods}) => goods.itemsSection);

    const {push, awo_shop_storage} = useSelector(({cart}) => cart);

    React.useEffect(() => {
        if (!Object.keys(teachers).length) {
            dispatch(fetchTeacher());
        }

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }

        if (!Object.keys(types).length) {
            dispatch(fetchGoodsType());
        }

        if (!Object.keys(items).length) {
            dispatch(fetchGoodsSection());
        }
    }, []);

    const toggleSuccessAddCart = React.useCallback(() => {
        dispatch(statusGoodsPush(!push));
    }, [dispatch]);

    const setAddGoods = React.useCallback(
        (item) => {
            dispatch(addGoodsCart(item));
        },
        [dispatch]
    );

    return (
        <>
            {Object.keys(items).length ? (
                <section className="shop" style={style && style}>
                    <div className="container">
                        <div className="shop-wrapper">
                            <h2 className={`title shop__title`}>
                                Начать учиться
                            </h2>

                            <div className="shop-block-wrapper">
                                {isLoaded
                                    ? Object.keys(items).map((key) => (
                                          <ShopBlock
                                              key={`shop-block-${items[key].id}`}
                                              onClickAddGoods={setAddGoods}
                                              onClickPush={toggleSuccessAddCart}
                                              types={types}
                                              categories={categories}
                                              auths={teachers}
                                              idAwo={items[key].id_awo}
                                              awo_shop_storage={
                                                  awo_shop_storage
                                              }
                                              {...items[key]}
                                          />
                                      ))
                                    : Array(3)
                                          .fill(0)
                                          .map((_, index) => (
                                              <div
                                                  className="shop-block"
                                                  key={index}
                                              >
                                                  <ShopBlockLoading />
                                              </div>
                                          ))}
                            </div>

                            <ShopSectionBtn />
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
});

export default ShopSection;
