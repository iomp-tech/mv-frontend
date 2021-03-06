import React from "react";

import moment from "moment";
import "moment/locale/ru";

const ShopPageMain2 = ({
    title,
    description,
    range,
    minDate,
    maxDate,
    date,
    size,
    form_id_awo,
    action,
    formId,
    formVc,
}) => {
    const [errorForm, setErrorForm] = React.useState({});

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

    return (
        <section className="shop-page-main2">
            <div className="container">
                <div className="shop-page-main2-wrapper">
                    <h1
                        className={`shop-page-main2__title ${size}`}
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h1>
                    <p className={`shop-page-main2__description ${size}`}>
                        {description}
                    </p>

                    <div className="circle-wrapper main-circle-wrapper">
                        <div className="circle-regular main-circle1"></div>
                        <div
                            className={`circle-bold ${size} main-circle2`}
                        ></div>
                    </div>

                    {range ? (
                        <div className="shop-page-main2-date">
                            <div className="shop-page-main2-date-left">
                                <span
                                    className={`shop-page-main2__date-range ${size}`}
                                >
                                    <b>Дата старта:</b>
                                </span>
                            </div>
                            <div className="shop-page-main2-date-right">
                                <span
                                    className={`shop-page-main2__date-range ${size}`}
                                >
                                    <b>с:</b>{" "}
                                    {moment(minDate, "YYYY-MM-DD, HH:mm")
                                        .locale("ru")
                                        .format("DD MMMM, HH:mm")}
                                </span>
                                <span
                                    className={`shop-page-main2__date-range ${size}`}
                                >
                                    <b>до:</b>{" "}
                                    {moment(maxDate, "YYYY-MM-DD, HH:mm")
                                        .locale("ru")
                                        .format("DD MMMM, HH:mm")}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className={`shop-page-main2-date ${size}`}>
                            <div className="shop-page-main2-date-left">
                                <span
                                    className={`shop-page-main2__date ${size}`}
                                >
                                    <b>Дата старта:</b>
                                </span>
                            </div>
                            <div className="shop-page-main2-date-right">
                                <span
                                    className={`shop-page-main2__date ${size}`}
                                >
                                    {moment(date, "YYYY-MM-DD, HH:mm")
                                        .locale("ru")
                                        .format("DD MMMM, HH:mm")}
                                </span>
                            </div>
                        </div>
                    )}

                    <form
                        className={`shop-page-main2-form ${size}`}
                        action={action}
                        method="POST"
                    >
                        <h3 className={`shop-page-main2-form__title ${size}`}>
                            Записаться
                        </h3>
                        <div className="shop-page-main2-form-middle">
                            <div
                                className={`shop-page-main2-form-block-wrapper  ${size}`}
                            >
                                <div className="input shop-page-main2-form-input-wrapper">
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
                                    <div className="shop-page-main2-form-input">
                                        <input
                                            type="text"
                                            className={`input__field ${size} shop-page-main2-form-input__field ${
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
                                    <input type="hidden" name="_aid" value="" />
                                    <input
                                        type="hidden"
                                        name="_vcaid"
                                        value=""
                                    />
                                </div>
                                <button
                                    className={`btn-bold_color shop-page-main2-form__btn ${size}`}
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
                        <div className="checkbox-wrapper shop-page-main2-checkbox">
                            <input
                                type="checkbox"
                                className={`${size} shop-page-main2__checkbox ${
                                    errorForm.confirmation
                                        ? "checkbox_error"
                                        : "checkbox"
                                }`}
                                defaultChecked={true}
                                id="shop-page-main2__checkbox-1"
                                onChange={checkBox}
                            />
                            <label
                                className={`${size} shop-page-main2__label ${
                                    errorForm.confirmation
                                        ? "checkbox-label_error"
                                        : "checkbox-label"
                                }`}
                                htmlFor="shop-page-main2__checkbox-1"
                            >
                                Я согласен с условиями обработки персональных
                                данных
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ShopPageMain2;
