import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

import {useDispatch, useSelector} from "react-redux";

import {LoginForm, PreloaderPage} from ".././components/";
import {sendLogin} from ".././redux/actions/login";

import Er404 from "./Er404";

const Login = () => {
    const dispatch = useDispatch();

    const {message} = useSelector(({login}) => login);
    const {isLogin, isLoaded} = useSelector(({user}) => user);
    const {size} = useSelector(({visually}) => visually);
    const {integration} = useSelector(({integration_page}) => integration_page);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            const script = document.createElement("script");

            const scriptText = document.createTextNode(integration.loginJs);

            script.appendChild(scriptText);

            document.querySelector("#vanila__js__page").innerHTML = "";
            document.querySelector("#vanila__js__page").appendChild(script);

            document.querySelector("#tags__js__page").innerHTML =
                integration.loginHtml;
        }
    }, [Object.keys(integration).length]);

    const onSubmit = (formData) => {
        dispatch(sendLogin(formData));
    };

    return (
        <>
            <Helmet>
                <title>Войти - IOMP</title>
            </Helmet>
            {isLoaded ? (
                <>
                    {!isLogin ? (
                        <section className="reglog">
                            <div className="container">
                                <div className="reglog-wrapper">
                                    <div
                                        className={`circle-bold ${size} reglog-circle`}
                                    ></div>
                                    <div className="reglog-form">
                                        <h2 className={`reglog__title ${size}`}>
                                            Войти
                                        </h2>
                                        <Link
                                            to="/register"
                                            className={`reglog__link ${size}`}
                                        >
                                            Зapeгиcтpиpoвaтьcя
                                        </Link>

                                        {message && (
                                            <p
                                                className={`reglog-form__error ${size}`}
                                            >
                                                {message}
                                            </p>
                                        )}

                                        <LoginForm
                                            onSubmit={onSubmit}
                                            size={size}
                                        />

                                        <Link
                                            to="/restoreemail"
                                            className={`reglog__link_gray ${size}`}
                                        >
                                            Забыли пароль?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <Er404 />
                    )}
                </>
            ) : (
                <PreloaderPage />
            )}
        </>
    );
};

export default Login;
