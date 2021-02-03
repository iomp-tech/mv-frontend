import React from "react";

import {Field, reduxForm} from "redux-form";
import {useSelector} from "react-redux";

import validate from "./validate";

import EmailFormRenderCheckbox from "./EmailFormRenderCheckbox";
import EmailFormRenderInput from "./EmailFormRenderInput";

let EmailForm = React.memo(({handleSubmit, stateForm}) => {
    const {size} = useSelector(({visually}) => visually);

    return (
        <form className="email-form" onSubmit={handleSubmit}>
            <div className="container">
                <div className={`email-form-wrapper ${size}`}>
                    <div className={`email-form-left ${size}`}>
                        <h2 className={`email-form__title ${size}`}>
                            Хотите получать лучшие статьи от IOMP?
                        </h2>
                        <p className={`email-form__subtitle ${size}`}>
                            Подпишитесь на рассылку IOMP
                        </p>
                    </div>
                    <div className={`email-form-right ${size}`}>
                        {stateForm ? (
                            <p className={`email-form__subtitle ${size}`}>
                                Спасибо, вы успешно подписаны
                            </p>
                        ) : (
                            <>
                                <Field
                                    component={EmailFormRenderInput}
                                    type="email"
                                    name="email"
                                    size={size}
                                    placeholder="Email"
                                />
                                <div className="checkbox-wrapper email-form-checkbox">
                                    <Field
                                        component={EmailFormRenderCheckbox}
                                        type="checkbox"
                                        name="confirmation"
                                        id="email-form__checkbox"
                                        size={size}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
});

EmailForm = reduxForm({
    form: "emailFormBig",
    initialValues: {confirmation: true},
    validate,
})(EmailForm);

export default EmailForm;
