import React from "react";
import {Field, reduxForm} from "redux-form";
import {useSelector} from "react-redux";

import validate from "./validate";

import {BtnLoaded, RenderInput} from ".././";

let RestoreEmailForm = React.memo(
    ({handleSubmit, invalid, submitting, pristine}) => {
        const {isLoaded} = useSelector(({restore}) => restore);

        return (
            <form onSubmit={handleSubmit}>
                <div className="input reglog-input">
                    <Field
                        component={RenderInput}
                        type="text"
                        name="email"
                        label="Email"
                    />
                </div>

                <button
                    type="submit"
                    className={`btn-bold_color reglog__btn`}
                    style={{pointerEvents: `${isLoaded ? "none" : "auto"}`}}
                    disabled={invalid || submitting || pristine}
                >
                    {isLoaded ? <BtnLoaded /> : "Отправить"}
                </button>
            </form>
        );
    }
);

RestoreEmailForm = reduxForm({
    form: "restoreEmailForm",
    validate,
})(RestoreEmailForm);

export default RestoreEmailForm;
