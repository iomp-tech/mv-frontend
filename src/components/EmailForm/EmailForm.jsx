import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";
import EmailFormRenderInputButton from "./EmailFormRenderInputButton";
import EmailFormRenderCheckbox from "./EmailFormRenderCheckbox";

let EmailForm = React.memo(({size, handleSubmit, isLoaded, initialize}) => {
    React.useEffect(() => {
        initialize({
            confirmation: true,
        });
    }, []);

    return (
        <>
            {isLoaded ? (
                <form onSubmit={handleSubmit} className="email-form">
                    <div className="container">
                        <div className={`email-form-wrapper ${size}`}>
                            <div className={`email-form-left ${size}`}>
                                <h2 className={`email-form__title ${size}`}>
                                    Хотите получать лучшие статьи от Института?
                                </h2>
                                <p className={`email-form__subtitle ${size}`}>
                                    Подпишитесь на рассылку Института
                                </p>
                            </div>
                            <div className={`email-form-right ${size}`}>
                                <div className="email-form-input">
                                    <Field
                                        component={EmailFormRenderInputButton}
                                        type="email"
                                        name="email"
                                        label="Email"
                                        size={size}
                                    />
                                </div>

                                <div className="checkbox-wrapper email-form-checkbox">
                                    <Field
                                        component={EmailFormRenderCheckbox}
                                        type="checkbox"
                                        name="confirmation"
                                        id="email-form__checkbox"
                                        label="Я согласен с условиями обработки персональных данных"
                                        size={size}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            ) : null}
        </>
    );
});

EmailForm = reduxForm({
    form: "email_form",
    validate,
})(EmailForm);

export default EmailForm;
