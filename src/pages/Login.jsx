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

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                                    <div className="circle-bold reglog-circle"></div>
                                    <div className="reglog-form">
                                        <h2 className="reglog__title">Войти</h2>
                                        <Link
                                            to="/register"
                                            className="reglog__link"
                                        >
                                            Зapeгиcтpиpoвaтьcя
                                        </Link>

                                        {message && (
                                            <p className="reglog-form__error">
                                                {message}
                                            </p>
                                        )}

                                        <LoginForm onSubmit={onSubmit} />

                                        <Link
                                            to="/restoreemail"
                                            className="reglog__link_gray"
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
