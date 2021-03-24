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
        autoWidth: true,
        margin: 50,
		items: 1,
		responsive: {
			1000: {
				margin: 150
			}
		}
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
                    <OwlCarousel options={options}>
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
