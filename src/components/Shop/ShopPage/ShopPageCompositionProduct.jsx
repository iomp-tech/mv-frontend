import React from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import NumberFormat from "react-number-format";

import Slider from "react-slick";

import "../../../assets/slick/slick.css";
import "../../../assets/slick/slick-theme.css";

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

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 1000,
        swipeToSlide: true,
        variableWidth: true,
    };

    const nextSlide = (index) => {
        sliderRef.current.slickGoTo(index);
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
                        className={`title shop-page-composition-product__title`}
                    >
                        {title}
                    </h2>
                    <Slider ref={sliderRef} {...settings}>
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
                                    }`}
                                    onClick={() =>
                                        onClickSliderTextModulesItem(index)
                                    }
                                >
                                    {module.title}
                                </h3>
                            </div>
                        ))}
                    </Slider>
                    <div
                        className={`shop-page-composition-product-modules-description`}
                    >
                        <p
                            className={`shop-page-composition-product-modules__description`}
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
                            }`}
                        >
                            {modules[stateModulesIndex].items &&
                                modules[stateModulesIndex].items.map(
                                    (item, index) => (
                                        <div
                                            key={`composition-product-list-item-${index}`}
                                            className={`shop-page-composition-product-list-item`}
                                        >
                                            <h4
                                                className={`shop-page-composition-product-list-item__title`}
                                            >
                                                {item.title}
                                            </h4>
                                            <p
                                                className={`shop-page-composition-product-list-item__description`}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    )
                                )}
                        </div>
                        <div className="circle-wrapper shop-page-composition-product-circle-wrapper">
                            <div
                                className={`circle-bold shop-page-composition-product-circle1`}
                            ></div>
                            <div
                                className={`circle-regular shop-page-composition-product-circle2`}
                            ></div>
                        </div>
                    </div>
                    {parseInt(formBoolean) ? (
                        <ShopPageFormCompositionProduct
                            onSubmit={onSubmitCompositionProduct}
                        />
                    ) : Object.keys(itemsAll).length ? (
                        <div
                            className={`shop-page-composition-product-block-wrapper`}
                        >
                            <div
                                className={`shop-page-composition-product-block-left`}
                            >
                                <div
                                    className={`shop-page-composition-product-block-left-price-wrapper`}
                                >
                                    <h4
                                        className={`shop-page-composition-product-block__title`}
                                    >
                                        Стоимость:
                                    </h4>
                                    <div className="shop-page-composition-product-block-price">
                                        <div className="shop-page-composition-product-block-price-top">
                                            {itemsAll[
                                                modules[stateModulesIndex]
                                                    .goodModule
                                            ] &&
                                            itemsAll[
                                                modules[stateModulesIndex]
                                                    .goodModule
                                            ].sale ? (
                                                <>
                                                    <p
                                                        className={`shop-page-composition-product-block__subprice`}
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
                                                        className={`shop-page-composition-product-block__price`}
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
                                                    className={`shop-page-composition-product-block__price`}
                                                >
                                                    <NumberFormat
                                                        value={
                                                            itemsAll[
                                                                modules[
                                                                    stateModulesIndex
                                                                ].goodModule
                                                            ] &&
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
                                    className={`btn-bold_color shop-page-composition-product-block__btn`}
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
                                    className={`shop-page-composition-product-block-right`}
                                >
                                    <div className="shop-page-composition-product-block-right-top">
                                        <h4
                                            className={`shop-page-composition-product-block__title_color`}
                                        >
                                            {
                                                modules[stateModulesIndex]
                                                    .titleStock
                                            }
                                        </h4>
                                        <p
                                            className={`shop-page-composition-product-block__subtitle`}
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
                                            className={`btn-bold_color shop-page-composition-product-block__btn`}
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
