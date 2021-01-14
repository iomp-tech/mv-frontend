import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

import {RepeatForm, PreloaderPage} from ".././components";
import {sendRepeat} from ".././redux/actions/repeat";

import Er404 from "./Er404";

const Repeat = () => {
    const dispatch = useDispatch();

    const {message} = useSelector(({repeat}) => repeat);
    const {isLoaded, isLogin} = useSelector(({user}) => user);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = (formData) => {
        dispatch(sendRepeat(formData));
    };

    return (
        <>
            <Helmet>
                <title>Отправить письмо еще раз - IOMP</title>
            </Helmet>

            {isLoaded ? (
                <>
                    {isLogin ? (
                        <section className="reglog">
                            <div className="container">
                                <div className="reglog-wrapper">
                                    <div className="circle-bold reglog-circle"></div>
                                    <div className="reglog-form">
                                        <h2 className="reglog__title">
                                            Отправить письмо еще раз
                                        </h2>

                                        {message && (
                                            <p className="reglog-form__error">
                                                {message}
                                            </p>
                                        )}

                                        <RepeatForm onSubmit={onSubmit} />
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

export default Repeat;
