import React from "react";
import {Field, reduxForm} from "redux-form";
import {useSelector} from "react-redux";

import validate from "./validate";

import {BtnLoaded, RenderInput} from ".././";

let RegisterForm = React.memo(
    ({handleSubmit, invalid, submitting, pristine, size}) => {
        const {isLoaded} = useSelector(({register}) => register);

        const [statePassowrd, setStatePassword] = React.useState({
            password: false,
        });

        return (
            <form onSubmit={handleSubmit}>
                <div className="input reglog-input">
                    <Field
                        component={RenderInput}
                        type="name"
                        name="name"
                        label="Имя"
                        size={size}
                    />
                </div>
                <div className="input reglog-input">
                    <Field
                        component={RenderInput}
                        type="text"
                        name="email"
                        label="Email"
                        size={size}
                    />
                </div>
                <div className="input reglog-input">
                    <Field
                        component={RenderInput}
                        func={setStatePassword}
                        statePassowrd={statePassowrd}
                        typeConst="password"
                        keyInput="password"
                        type={statePassowrd.password ? "text" : "password"}
                        name="password"
                        label="Пароль"
                        size={size}
                    />
                </div>

                <button
                    type="submit"
                    className={`btn-bold_color ${size} reglog__btn ${
                        invalid ? "reglog__btn_disabled" : ""
                    }`}
                    style={{pointerEvents: `${isLoaded ? "none" : ""}`}}
                    disabled={invalid || submitting || pristine}
                >
                    {isLoaded ? <BtnLoaded /> : "Зарегистрироваться"}
                </button>
            </form>
        );
    }
);

RegisterForm = reduxForm({
    form: "register",
    validate,
})(RegisterForm);

export default RegisterForm;
