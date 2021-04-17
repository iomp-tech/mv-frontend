import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchCategories} from "../../../redux/actions/categories";
import {fetchGoods, fetchGoodsType} from "../../../redux/actions/goods";
import {addGoodsCart, statusGoodsPush} from "../../../redux/actions/cart";
import {fetchTeacher} from "../../../redux/actions/teacher";

import ShopBlock from "../ShopBlock";
import ShopBlockLoading from "../ShopBlockLoading";

const ShopPageGoods = ({title, goods}) => {
    const dispatch = useDispatch();

    const categories = useSelector(({categories}) => categories.items);
    const {isLoaded, types, items} = useSelector(({goods}) => goods);
    const teachers = useSelector(({teacher}) => teacher.items);

    const {push} = useSelector(({cart}) => cart);

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
            dispatch(fetchGoods());
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
                <section className="shop" style={{marginBottom: "50px"}}>
                    <div className="container">
                        <div className="shop-wrapper">
                            <h2 className={`title shop__title`}>
                                {title}
                            </h2>

                            <div className="shop-block-wrapper">
                                {isLoaded
                                    ? goods.map(
                                          (key) =>
                                              items[`good-${key}`] && (
                                                  <ShopBlock
                                                      key={`shop-page-block-${
                                                          items[`good-${key}`]
                                                              .id
                                                      }`}
                                                      onClickAddGoods={
                                                          setAddGoods
                                                      }
                                                      onClickPush={
                                                          toggleSuccessAddCart
                                                      }
                                                      types={types}
                                                      categories={categories}
                                                      auths={teachers}
                                                      idAwo={
                                                          items[`good-${key}`]
                                                              .id_awo
                                                      }
                                                      {...items[`good-${key}`]}
                                                  />
                                              )
                                      )
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
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default ShopPageGoods;
