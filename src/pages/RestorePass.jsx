import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {RestorePassForm, PreloaderPage} from ".././components";
import {sendRestorePass, checkRestorePass} from ".././redux/actions/restore";

import Er404 from "./Er404";

const RestorePass = (props) => {
    const dispatch = useDispatch();
    const hash = props.match.params.hash;

    const {message, check, isLoadedCheck} = useSelector(({restore}) => restore);
    const {isLoaded, isLogin} = useSelector(({user}) => user);

    React.useEffect(() => {
        dispatch(checkRestorePass({hash: hash}));

        window.scrollTo(0, 0);
    }, []);

    const onSubmit = (formData) => {
        dispatch(
            sendRestorePass({
                hash: hash,
                email: formData.email,
                password_one: formData.password_one,
                password_two: formData.password_two,
                password: formData.password_one,
            })
        );
    };

    return (
        <>
            <Helmet>
                <title>Забыли пароль? - IOMP</title>
            </Helmet>
            {isLoaded ? (
                <>
                    {!isLogin ? (
                        isLoadedCheck ? (
                            <section className="reglog">
                                <div className="container">
                                    {check ? (
                                        <div className="reglog-wrapper">
                                            <div
                                                className={`circle-bold reglog-circle`}
                                            ></div>

                                            <div className="reglog-form">
                                                <h2
                                                    className={`reglog__title`}
                                                >
                                                    Введите новый пароль
                                                </h2>

                                                {message && (
                                                    <p
                                                        className={`reglog-form__error`}
                                                    >
                                                        {message}
                                                    </p>
                                                )}

                                                <RestorePassForm
                                                    onSubmit={onSubmit}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <h2
                                                className={`error__title`}
                                            >
                                                Ссылка <span>устарела</span>
                                            </h2>
                                            <p
                                                className={`error__subtitle`}
                                            >
                                                Ваша ссылка на подтверждение
                                                аккаунта устарела. Если письмо
                                                не пришло проверьте папку
                                                "спам".{" "}
                                                <Link to="/repeat">
                                                    Отправить еще раз
                                                </Link>
                                            </p>
                                            <Link
                                                to="/"
                                                className={`btn-bold_color error__btn`}
                                            >
                                                На главную страницу
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </section>
                        ) : (
                            <PreloaderPage />
                        )
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

export default RestorePass;
