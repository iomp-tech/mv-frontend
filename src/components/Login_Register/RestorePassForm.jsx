import React from "react";
import {Field, reduxForm} from "redux-form";
import {useSelector} from "react-redux";

import validate from "./validate";

import {BtnLoaded, RenderInput} from ".././";

let RestorePassForm = React.memo(
    ({handleSubmit, invalid, submitting, pristine}) => {
        const {isLoaded} = useSelector(({restore}) => restore);

        const [statePassowrd, setStatePassword] = React.useState({
            password1State: false,
            password2State: false,
        });

        return (
            <form onSubmit={handleSubmit}>
                <div className="input reglog-input">
                    <Field
                        component={RenderInput}
                        func={setStatePassword}
                        statePassowrd={statePassowrd}
                        typeConst="password"
                        keyInput="password1State"
                        type={
                            statePassowrd.password1State ? "text" : "password"
                        }
                        name="password_one"
                        label="Новый пароль"
                    />
                </div>

                <div className="input reglog-input">
                    <Field
                        component={RenderInput}
                        func={setStatePassword}
                        statePassowrd={statePassowrd}
                        typeConst="password"
                        keyInput="password2State"
                        type={
                            statePassowrd.password2State ? "text" : "password"
                        }
                        name="password_two"
                        label="Повторите новый пароль"
                    />
                </div>

                <button
                    type="submit"
                    className="btn-bold_color reglog__btn"
                    style={{pointerEvents: `${isLoaded ? "none" : "auto"}`}}
                    disabled={invalid || submitting || pristine}
                >
                    {isLoaded ? <BtnLoaded /> : "Отправить"}
                </button>
            </form>
        );
    }
);

RestorePassForm = reduxForm({
    form: "restorePassForm",
    validate,
})(RestorePassForm);

export default RestorePassForm;
