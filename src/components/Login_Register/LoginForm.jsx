import React from "react";
import {Field, reduxForm} from "redux-form";
import {useSelector} from "react-redux";

import validate from "./validate";

import {BtnLoaded, RenderInput} from ".././";

let LoginForm = React.memo(({handleSubmit}) => {
    const {isLoaded} = useSelector(({login}) => login);
    const {size} = useSelector(({visually}) => visually);

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
                    size={size}
                    type={statePassowrd.password ? "text" : "password"}
                    name="password"
                    label="Пароль"
                />
            </div>

            <button
                type="submit"
                className={`btn-bold_color reglog__btn ${size}`}
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
