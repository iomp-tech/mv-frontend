import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

import {RestoreEmailForm, PreloaderPage} from ".././components";
import {sendRestoreEmail} from ".././redux/actions/restore";

import Er404 from "./Er404";

const RestoreEmail = () => {
    const dispatch = useDispatch();

    const {message} = useSelector(({restore}) => restore);
    const {isLoaded, isLogin} = useSelector(({user}) => user);
    const {size} = useSelector(({visually}) => visually);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = (formData) => {
        dispatch(sendRestoreEmail(formData));
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
                                            Забыли пароль?
                                        </h2>

                                        {message && (
                                            <p
                                                className={`reglog-form__error ${size}`}
                                            >
                                                {message}
                                            </p>
                                        )}

                                        <RestoreEmailForm
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

export default RestoreEmail;
