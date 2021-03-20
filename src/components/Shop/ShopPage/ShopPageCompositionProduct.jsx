import React from "react";
import {useDispatch, useSelector} from "react-redux";
import NumberFormat from "react-number-format";

import OwlCarousel from "react-owl-carousel2";
import "../../../assets/owl-carousel/owl.carousel.css";

import {addGoodsCart, statusGoodsPush} from "../../../redux/actions/cart";
import {fetchAllGoods} from "../../../redux/actions/goods";

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

    const [errorForm, setErrorForm] = React.useState({});

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

    const checkInput = (e) => {
        const value = e.target.value;

        const errors = {};

        const defaultMin = 2;
        const defaultMax = 255;

        if (!value) {
            errors.email = "Поле не может быть пустым";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errors.email = "Неверный email";
        } else if (value.length > defaultMax) {
            errors.email = `Не более ${defaultMax} символов`;
        } else if (value.length < defaultMin) {
            errors.email = `Не менее ${defaultMin} символов`;
        }

        setErrorForm({
            email: errors.email,
            confirmation: errorForm.confirmation,
        });
    };

    const checkBox = (e) => {
        const value = e.target.checked;

        const errors = {};

        if (!value) {
            errors.confirmation = "Поставьте галочку";
        }

        setErrorForm({
            confirmation: errors.confirmation,
            email: errorForm.email,
        });
    };

    const options = {
        items: 1,
        responsive: {
            1000: {
                margin: 150,
                items: 3,
            },
        },
    };

    const slider = React.useRef();

    const prev = () => {
        slider.current.prev();
    };

    const next = () => {
        slider.current.next();
    };

    const onClickSliderTextModulesItem = (index) => {
        setStateModulesIndex(index);
        setStateAnimateModules(true);

        setTimeout(() => {
            setStateAnimateModules(false);
        }, 400);
    };

    const setUpdateGoods = (id) => {
        const obj = {
            id: id,
        };

        dispatch(addGoodsCart(obj));
        dispatch(statusGoodsPush(!push));
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
                    <OwlCarousel ref={slider} options={options}>
                        {modules.map((module, index) => (
                            <div
                                key={`shop-page-composition-product-modules-item-${index}`}
                                className="shop-page-composition-product-modules-item"
                            >
                                <h3
                                    key={`composition-product-module-${index}`}
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
                    <div className="shop-page-composition-product-arrow">
                        <div className="arrow">
                            <div className="arrow-prev" onClick={prev}>
                                <svg
                                    width="45"
                                    height="45"
                                    viewBox="0 0 50 25"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M-0.000164032 12.4993C-0.000464032 12.3246 0.0687362 12.157 0.192436 12.0333L12.0603 0.184753C12.3222 -0.0678466 12.7396 -0.0605456 12.9926 0.200954C13.2394 0.456054 13.2394 0.860454 12.9926 1.11545L1.59153 12.4993L12.9926 23.8817C13.2456 24.1432 13.2383 24.5599 12.9765 24.8125C12.7209 25.0589 12.3159 25.0589 12.0603 24.8125L0.192436 12.964C0.0691362 12.8407 -6.4032e-05 12.6736 -0.000164032 12.4993Z" />
                                    <path d="M0 12.5673C0 12.2059 0.466398 11.9129 1.0417 11.9129L48.9583 11.9129C49.5336 11.913 50 12.2059 50 12.5673C50 12.9287 49.5336 13.2217 48.9583 13.2217L1.0416 13.2217C0.466399 13.2217 0 12.9287 0 12.5673Z" />
                                </svg>
                            </div>
                            <div className="arrow-next" onClick={next}>
                                <svg
                                    width="45"
                                    height="45"
                                    viewBox="0 0 50 25"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M50.0002 12.5007C50.0005 12.6754 49.9313 12.843 49.8076 12.9667L37.9397 24.8152C37.6778 25.0678 37.2604 25.0605 37.0074 24.799C36.7606 24.5439 36.7606 24.1395 37.0074 23.8845L48.4085 12.5007L37.0074 1.11824C36.7544 0.856768 36.7617 0.440031 37.0235 0.187449C37.2791 -0.0589638 37.6841 -0.0589638 37.9397 0.187449L49.8076 12.036C49.9309 12.1593 50.0001 12.3264 50.0002 12.5007Z" />
                                    <path d="M50 12.4328C50 12.7942 49.5336 13.0872 48.9583 13.0872L1.0417 13.0872C0.466406 13.0871 0 12.7942 0 12.4328C0 12.0714 0.466406 11.7784 1.0417 11.7784L48.9584 11.7784C49.5336 11.7784 50 12.0714 50 12.4328Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
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
                    {formBoolean ? (
                        <form
                            className={`shop-page-composition-product-form ${size}`}
                            action={action}
                            method="POST"
                        >
                            <h3
                                className={`shop-page-composition-product-form__title ${size}`}
                            >
                                Записаться
                            </h3>
                            <div className="shop-page-composition-product-form-middle">
                                <div
                                    className={`shop-page-composition-product-form-block-wrapper ${size}`}
                                >
                                    <div className="input shop-page-composition-product-form-input-wrapper">
                                        <input
                                            type="hidden"
                                            value={form_id_awo}
                                            id="form_newsletter_id_newsletter"
                                            name="Contact[id_newsletter]"
                                        />
                                        <input
                                            type="hidden"
                                            value="1"
                                            id="required_fields_email"
                                            name="required_fields[email]"
                                        />
                                        <div className="shop-page-composition-product-form-input">
                                            <input
                                                type="text"
                                                className={`input__field ${size} shop-page-composition-product-form-input__field ${
                                                    errorForm.email
                                                        ? "input__field__error"
                                                        : ""
                                                }`}
                                                name="Contact[email]"
                                                required
                                                onBlur={checkInput}
                                                onChange={checkInput}
                                            />
                                            <label
                                                className={`input__label ${size} reglog-input__label ${
                                                    errorForm.email
                                                        ? "input__label__error"
                                                        : ""
                                                }`}
                                            >
                                                Email
                                            </label>
                                        </div>

                                        {/* канал рекламы */}
                                        <input
                                            type="hidden"
                                            value="0"
                                            id="form_newsletter_id_advertising_channel_page"
                                            name="Contact[id_advertising_channel_page]"
                                        />
                                        <input
                                            type="hidden"
                                            name="formId"
                                            value={formId}
                                        />
                                        <input
                                            type="hidden"
                                            name="formVc"
                                            value={formVc}
                                        />
                                        <input
                                            type="hidden"
                                            name="_aid"
                                            value=""
                                        />
                                        <input
                                            type="hidden"
                                            name="_vcaid"
                                            value=""
                                        />
                                    </div>
                                    <button
                                        className={`btn-bold_color shop-page-composition-product-form__btn ${size}`}
                                        disabled={
                                            errorForm.email ||
                                            errorForm.confirmation
                                                ? true
                                                : false
                                        }
                                    >
                                        Записаться
                                    </button>
                                </div>
                                {errorForm.email ? (
                                    <div>
                                        <span
                                            className={`input__label__error_bottom ${size}`}
                                        >
                                            {errorForm.email}
                                        </span>
                                    </div>
                                ) : null}
                            </div>
                            <div className="checkbox-wrapper shop-page-composition-product-checkbox">
                                <input
                                    type="checkbox"
                                    className={`${size} shop-page-composition-product__checkbox ${
                                        errorForm.confirmation
                                            ? "checkbox_error"
                                            : "checkbox"
                                    }`}
                                    defaultChecked={true}
                                    id="shop-page-composition-product__checkbox-1"
                                    onChange={checkBox}
                                />
                                <label
                                    className={`shop-page-composition-product__label ${
                                        errorForm.confirmation
                                            ? "checkbox-label_error"
                                            : "checkbox-label"
                                    } ${size}`}
                                    htmlFor="shop-page-composition-product__checkbox-1"
                                >
                                    Я согласен с условиями обработки
                                    персональных данных
                                </label>
                            </div>
                        </form>
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
                            {modules[stateModulesIndex].stockBoolean ? (
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
