import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";

import {
    EmailFormRenderInputButton,
    EmailFormRenderCheckbox,
    RenderInput,
} from "../";

let EmailForm = React.memo(
    ({
        id_awo,
        action,
        formId,
        formVc,
        invalid,
        submitting,
        pristine,
        initialize,
    }) => {
        React.useEffect(() => {
            initialize({
                required_fields: {email: 1},
                Contact: {
                    id_newsletter: id_awo,
                    id_advertising_channel_page: 0,
                },
                formId,
                formVc,
                _aid: "",
                _vcaid: "",
            });
        }, []);

        return (
            <form
                action={action}
                className="email-form"
                encType="application/x-www-form-urlencoded"
                acceptCharset="UTF-8"
                method="POST"
            >
                <div className="container">
                    <div className={`email-form-wrapper`}>
                        <div className={`email-form-left`}>
                            <h2 className={`email-form__title`}>
                                Хотите получать лучшие статьи от MasterVision?
                            </h2>
                            <p className={`email-form__subtitle`}>
                                Подпишитесь на рассылку MasterVision
                            </p>
                        </div>
                        <div className={`email-form-right`}>
                            <div className="email-form-input">
                                <Field
                                    component={RenderInput}
                                    type="hidden"
                                    name="required_fields[email]"
                                />
                                <Field
                                    component={EmailFormRenderInputButton}
                                    invalid={invalid}
                                    submitting={submitting}
                                    pristine={pristine}
                                    type="email"
                                    name="Contact[email]"
                                    label="Email"
                                />
                                <div style={{display: "none"}}>
                                    <div
                                        id="formTypeSpecificVars-1"
                                        style={{display: "none"}}
                                    >
                                        <Field
                                            component={RenderInput}
                                            type="hidden"
                                            name="Contact[id_newsletter]"
                                        />
                                    </div>
                                    <Field
                                        component={RenderInput}
                                        type="hidden"
                                        name="Contact[id_advertising_channel_page]"
                                    />
                                    <Field
                                        component={RenderInput}
                                        type="hidden"
                                        name="formId"
                                    />
                                    <Field
                                        component={RenderInput}
                                        type="hidden"
                                        name="formVc"
                                    />
                                    <Field
                                        component={RenderInput}
                                        type="hidden"
                                        name="_aid"
                                    />
                                    <Field
                                        component={RenderInput}
                                        type="hidden"
                                        name="_vcaid"
                                    />
                                </div>
                            </div>

                            <div className="checkbox-wrapper email-form-checkbox">
                                <Field
                                    component={EmailFormRenderCheckbox}
                                    type="checkbox"
                                    name="confirmation"
                                    id="email-form__checkbox"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
);

EmailForm = reduxForm({
    form: "email_form",
    validate,
})(EmailForm);

export default EmailForm;
