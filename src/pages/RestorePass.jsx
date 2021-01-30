import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

import {RestorePassForm, PreloaderPage} from ".././components";
import {sendRestorePass} from ".././redux/actions/restore";

import Er404 from "./Er404";

const RestorePass = (props) => {
    const dispatch = useDispatch();
    const hash = props.match.params.hash;

    const {message} = useSelector(({restore}) => restore);
    const {isLoaded, isLogin} = useSelector(({user}) => user);
    const {size} = useSelector(({visually}) => visually);

    React.useEffect(() => {
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
                        <section className="reglog">
                            <div className="container">
                                <div className="reglog-wrapper">
                                    <div
                                        className={`circle-bold ${size} reglog-circle`}
                                    ></div>
                                    <div className="reglog-form">
                                        <h2 className={`reglog__title ${size}`}>
                                            Введите новый пароль
                                        </h2>

                                        {message && (
                                            <p
                                                className={`reglog-form__error ${size}`}
                                            >
                                                {message}
                                            </p>
                                        )}

                                        <RestorePassForm
                                            onSubmit={onSubmit}
                                            size={size}
                                        />
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

export default RestorePass;
