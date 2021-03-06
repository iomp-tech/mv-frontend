import React from "react";

const FooterForm = React.memo(
    ({
        checkInput,
        checkBox,
        errorForm,
        size,
        action,
        formId,
        formVc,
        id_awo,
    }) => {
        return (
            <form
                className={`footer-email-form ${size}`}
                action={action}
                method="POST"
            >
                <h4 className={`footer-email-form__title ${size}`}>
                    Подпишитесь на рассылку Института
                </h4>
                <>
                    <div className="footer-email-form-input">
                        <button
                            type="submit"
                            className="footer-email-form__btn"
                            disabled={
                                errorForm.email || errorForm.confirmation
                                    ? true
                                    : false
                            }
                        >
                            <svg
                                width="26"
                                height="8"
                                viewBox="0 0 26 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="footer-email-form-input__svg"
                            >
                                <path
                                    fill={errorForm.email ? "#FD5754" : "#fff"}
                                    d="M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5L25 4.5V3.5L0 3.5L0 4.5Z"
                                />
                            </svg>
                        </button>
                        <input
                            type="email"
                            name="Contact[email]"
                            placeholder="Email"
                            className={`footer-email-form-input__field ${size} ${
                                errorForm.email
                                    ? "footer-email-form-input__field_error"
                                    : ""
                            }`}
                            onBlur={checkInput}
                            onChange={checkInput}
                        />
                    </div>
                    {errorForm.email ? (
                        <span className={`input__label__error_bottom ${size}`}>
                            {errorForm.email}
                        </span>
                    ) : null}

                    <div style={{display: "none"}}>
                        <input
                            type="hidden"
                            value={id_awo}
                            id="form_newsletter_id_newsletter"
                            name="Contact[id_newsletter]"
                        />
                        <input
                            type="hidden"
                            value="1"
                            id="required_fields_email"
                            name="required_fields[email]"
                        />
                    </div>

                    {/* канал рекламы */}
                    <div style={{display: "none"}}>
                        <input
                            type="hidden"
                            value="0"
                            id="form_newsletter_id_advertising_channel_page"
                            name="Contact[id_advertising_channel_page]"
                        />
                        <input type="hidden" name="formId" value={formId} />
                        <input type="hidden" name="formVc" value={formVc} />
                        <input type="hidden" name="_aid" value="" />
                        <input type="hidden" name="_vcaid" value="" />
                    </div>

                    <div className="checkbox-wrapper footer-email-form-checkbox">
                        <input
                            type="checkbox"
                            name="confirmation"
                            id="footer-email-form__checkbox"
                            className={`checkbox_white ${size} footer-email-form__checkbox ${
                                errorForm.confirmation
                                    ? "checkbox_white_error"
                                    : ""
                            }`}
                            defaultChecked={true}
                            onChange={checkBox}
                        />
                        <label
                            className={`checkbox-label_white ${size} footer-email-form__label ${
                                errorForm.confirmation
                                    ? "checkbox-label_white_error"
                                    : ""
                            }`}
                            htmlFor="footer-email-form__checkbox"
                        >
                            Я согласен с условиями обработки персональных данных
                        </label>
                    </div>
                </>
            </form>
        );
    }
);

export default FooterForm;
