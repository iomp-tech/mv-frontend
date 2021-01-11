import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {PreloaderPage} from ".././components";

import Er404 from "./Er404";

const RestoreSuccess = () => {
    const {isLoaded, isLogin} = useSelector(({user}) => user);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Забыли пароль? - MasterVision</title>
            </Helmet>
            {isLoaded ? (
                <>
                    {!isLogin ? (
                        <section className="error">
                            <div className="container">
                                <div className="error-wrapper">
                                    <h2 className="error__title">
                                        Письмо <span>отправлено</span> на ваш
                                        email
                                    </h2>
                                    <p className="error__subtitle">
                                        На ваш email было отправлено письмо с
                                        ссылкой на изменения пароля. Если письмо
                                        не пришло проверьте папку "спам".{" "}
                                        <Link to="/restoreemail">
                                            Отправить еще раз
                                        </Link>
                                    </p>
                                    <Link
                                        to="/"
                                        className="btn-bold_color error__btn"
                                    >
                                        На главную страницу
                                    </Link>
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

export default RestoreSuccess;
