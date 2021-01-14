import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

import {RegisterForm, PreloaderPage} from ".././components/";
import {sendRegister} from ".././redux/actions/register";

import Er404 from "./Er404";

const Register = () => {
    const dispatch = useDispatch();

    const {message} = useSelector(({register}) => register);
    const {isLoaded, isLogin} = useSelector(({user}) => user);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = (formData) => {
        dispatch(sendRegister(formData));
    };

    return (
        <>
            <Helmet>
                <title>Регистрация - IOMP</title>
            </Helmet>
            {isLoaded ? (
                <>
                    {!isLogin ? (
                        <section className="reglog">
                            <div className="container">
                                <div className="reglog-wrapper">
                                    <div className="circle-bold reglog-circle"></div>
                                    <div className="reglog-form">
                                        <h2 className="reglog__title">
                                            Зарегистрироваться
                                        </h2>

                                        <Link
                                            to="/login"
                                            className="reglog__link"
                                        >
                                            Войти
                                        </Link>

                                        {message && (
                                            <p className="reglog-form__error">
                                                {message}
                                            </p>
                                        )}
                                        <RegisterForm onSubmit={onSubmit} />
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

export default Register;
