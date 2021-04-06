import React from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import NumberFormat from "react-number-format";

import OwlCarousel from "react-owl-carousel2";
import "../../../assets/owl-carousel/owl.carousel.css";

import {addGoodsCart, statusGoodsPush} from "../../../redux/actions/cart";
import {fetchAllGoods} from "../../../redux/actions/goods";

import ShopPageFormCompositionProduct from "./ShopPageFormCompositionProduct";

const ShopPageCompositionProduct = ({
    title,
    modules,
    formBoolean,
    action,
    form_id_awo,
    formId,
    formVc,
    size,
}) => {
    const dispatch = useDispatch();

    const {itemsAll} = useSelector(({goods}) => goods);
    const {push} = useSelector(({cart}) => cart);

    React.useEffect(() => {
        if (!Object.keys(itemsAll).length) {
            dispatch(fetchAllGoods());
        }
    }, []);

    const [stateModulesIndex, setStateModulesIndex] = React.useState(0);
    const [stateAnimateModules, setStateAnimateModules] = React.useState(false);
    const [heightList, setHeightList] = React.useState(950);

    React.useEffect(() => {
        setHeightList(
            document.querySelector(".shop-page-composition-product-list")
                .clientHeight + 50
        );
    }, [stateModulesIndex]);

    const sliderRef = React.useRef();

    const onClickSliderTextModulesItem = (index) => {
        setStateModulesIndex(index);
        setStateAnimateModules(true);

        setTimeout(() => {
            setStateAnimateModules(false);
        }, 400);

        nextSlide(index);
    };

    const options = {
        autoWidth: true,
        margin: 50,
        responsive: {
            1000: {
                margin: 100,
            },
        },
    };

    const nextSlide = (index) => {
        sliderRef.current.goTo(index);
    };

    const setUpdateGoods = (id) => {
        const obj = {
            id: id,
        };

        dispatch(addGoodsCart(obj));
        dispatch(statusGoodsPush(!push));
	};
	
    const onSubmitCompositionProduct = (formData) => {
        const newData = {
            Contact: {
                email: formData.email,
                id_newsletter: form_id_awo,
                id_advertising_channel_page: 0,
            },
            required_fields: {
                email: 1,
            },
            formId: formId,
            formVc: formVc,
            _aid: "",
            _vcaid: "",
        };
        axios
            .post(action, newData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                window.location.href = action;
            })
            .catch(() => {
                return false;
            });
    };

    return (
        <section
            className="shop-page-composition-product"
            id="shop-page-composition-product"
        >
            <div className="container">
                <div className="shop-page-composition-product-wrapper">
                    <h2
                        className={`title ${size} shop-page-composition-product__title`}
                    >
                        {title}
                    </h2>
                    <OwlCarousel ref={sliderRef} options={options}>
                        {modules.map((module, index) => (
                            <div
                                key={`shop-page-composition-product-modules-item-${index}`}
                                className="shop-page-composition-product-modules-item"
                            >
                                <h3
                                    className={`shop-page-composition-product-modules-item__title ${
                                        index === stateModulesIndex
                                            ? "active"
                                            : ""
                                    } ${size}`}
                                    onClick={() =>
                                        onClickSliderTextModulesItem(index)
                                    }
                                >
                                    {module.title}
                                </h3>
                            </div>
                        ))}
                    </OwlCarousel>
                    <div
                        className={`shop-page-composition-product-modules-description ${size}`}
                    >
                        <p
                            className={`shop-page-composition-product-modules__description ${size}`}
                        >
                            {modules[stateModulesIndex].description}
                        </p>
                    </div>
                    <div
                        className="shop-page-composition-product-list-wrapper"
                        style={{height: heightList}}
                    >
                        <div
                            className={`shop-page-composition-product-list ${
                                stateAnimateModules ? "active" : ""
                            } ${size}`}
                        >
                            {modules[stateModulesIndex].items.map(
                                (item, index) => (
                                    <div
                                        key={`composition-product-list-item-${index}`}
                                        className={`shop-page-composition-product-list-item ${size}`}
                                    >
                                        <h4
                                            className={`shop-page-composition-product-list-item__title ${size}`}
                                        >
                                            {item.title}
                                        </h4>
                                        <p
                                            className={`shop-page-composition-product-list-item__description ${size}`}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    {parseInt(formBoolean) ? (
                        <ShopPageFormCompositionProduct
                            onSubmit={onSubmitCompositionProduct}
                            size={size}
                        />
                    ) : Object.keys(itemsAll).length ? (
                        <div
                            className={`shop-page-composition-product-block-wrapper ${size}`}
                        >
                            <div
                                className={`shop-page-composition-product-block-left ${size}`}
                            >
                                <div
                                    className={`shop-page-composition-product-block-left-price-wrapper ${size}`}
                                >
                                    <h4
                                        className={`shop-page-composition-product-block__title ${size}`}
                                    >
                                        Стоимость:
                                    </h4>
                                    <div className="shop-page-composition-product-block-price">
                                        <div className="shop-page-composition-product-block-price-top">
                                            {itemsAll[
                                                modules[stateModulesIndex]
                                                    .goodModule
                                            ].sale ? (
                                                <>
                                                    <p
                                                        className={`shop-page-composition-product-block__subprice ${size}`}
                                                    >
                                                        <NumberFormat
                                                            value={
                                                                itemsAll[
                                                                    modules[
                                                                        stateModulesIndex
                                                                    ].goodModule
                                                                ].priceOld
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                " "
                                                            }
                                                        />
                                                        ₽
                                                    </p>
                                                    <h3
                                                        className={`shop-page-composition-product-block__price ${size}`}
                                                    >
                                                        <NumberFormat
                                                            value={
                                                                itemsAll[
                                                                    modules[
                                                                        stateModulesIndex
                                                                    ].goodModule
                                                                ].price
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                " "
                                                            }
                                                        />
                                                        ₽
                                                    </h3>
                                                </>
                                            ) : (
                                                <h3
                                                    className={`shop-page-composition-product-block__price ${size}`}
                                                >
                                                    <NumberFormat
                                                        value={
                                                            itemsAll[
                                                                modules[
                                                                    stateModulesIndex
                                                                ].goodModule
                                                            ].price
                                                        }
                                                        displayType={"text"}
                                                        thousandSeparator={" "}
                                                    />
                                                    ₽
                                                </h3>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className={`btn-bold_color shop-page-composition-product-block__btn ${size}`}
                                    onClick={() =>
                                        setUpdateGoods(
                                            itemsAll[
                                                modules[stateModulesIndex]
                                                    .goodModule
                                            ].id
                                        )
                                    }
                                >
                                    Добавить в корзину
                                </button>
                            </div>
                            {parseInt(
                                modules[stateModulesIndex].stockBoolean
                            ) ? (
                                <div
                                    className={`shop-page-composition-product-block-right ${size}`}
                                >
                                    <div className="shop-page-composition-product-block-right-top">
                                        <h4
                                            className={`shop-page-composition-product-block__title_color ${size}`}
                                        >
                                            {
                                                modules[stateModulesIndex]
                                                    .titleStock
                                            }
                                        </h4>
                                        <p
                                            className={`shop-page-composition-product-block__subtitle ${size}`}
                                        >
                                            {
                                                modules[stateModulesIndex]
                                                    .descriptionStock
                                            }
                                        </p>
                                    </div>
                                    <div className="shop-page-composition-product-block-right-bottom">
                                        <button
                                            type="submit"
                                            className={`btn-bold_color shop-page-composition-product-block__btn ${size}`}
                                            onClick={() =>
                                                setUpdateGoods(
                                                    modules[stateModulesIndex]
                                                        .goodModuleStock
                                                )
                                            }
                                        >
                                            {
                                                modules[stateModulesIndex]
                                                    .btnTextStock
                                            }
                                        </button>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default ShopPageCompositionProduct;
