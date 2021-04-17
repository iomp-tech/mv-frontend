import React from "react";
import {Field, reduxForm} from "redux-form";
import {useSelector} from "react-redux";

import validate from "./validate";

import {BtnLoaded, RenderInput} from ".././";

let LoginForm = React.memo(({handleSubmit}) => {
    const {isLoaded} = useSelector(({login}) => login);

    const [statePassowrd, setStatePassword] = React.useState({
        password: false,
    });

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
                />
            </div>

            <button
                type="submit"
                className={`btn-bold_color reglog__btn`}
            >
                {isLoaded ? <BtnLoaded /> : "Войти"}
            </button>
        </form>
    );
});

LoginForm = reduxForm({
    form: "login",
    validate,
})(LoginForm);

export default LoginForm;
