import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory, Link} from "react-router-dom";
import {Helmet} from "react-helmet";

import {
    fetchEditUserInfo,
    fetchEditUserPassword,
} from ".././redux/actions/cabinet";

import {
    CabinetEditInfoForm,
    CabinetCartUser,
    CabinetEditPasswordForm,
    PreloaderPage,
} from ".././components";

const Cabinet = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {isLogin, isLoaded, user} = useSelector(({user}) => user);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmitEditInfo = (formData) => {
        dispatch(fetchEditUserInfo(formData));
    };

    const onSubmitEditPassword = (formData) => {
        dispatch(fetchEditUserPassword(formData));
    };

    return (
        <>
            <Helmet>
                <title>Личный кабинет - MasterVision</title>
            </Helmet>
            {isLoaded ? (
                <>
                    {isLogin ? (
                        <>
                            {parseInt(user.confirmed) ? (
                                <section className="cabinet">
                                    <div className="container">
                                        <div className="cabinet-wrapper">
                                            <h2 className="title cabinet__title">
                                                Личный кабинет
                                            </h2>

                                            <CabinetCartUser {...user} />

                                            <CabinetEditInfoForm
                                                onSubmit={onSubmitEditInfo}
                                                {...user}
                                            />

                                            <CabinetEditPasswordForm
                                                onSubmit={onSubmitEditPassword}
                                            />
                                        </div>
                                    </div>
                                </section>
                            ) : (
                                <section className="error">
                                    <div className="container">
                                        <div className="error-wrapper">
                                            <h2 className="error__title">
                                                <span>Подтвердите</span> ваш
                                                email
                                            </h2>
                                            <p className="error__subtitle">
                                                На ваш email было отправлено
                                                письмо с ссылкой на
                                                подтверждение аккаунта. Если
                                                письмо не пришло проверьте папку
                                                "спам".{" "}
                                                <Link to="/repeat">
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
                            )}
                        </>
                    ) : (
                        history.push("/login")
                    )}
                </>
            ) : (
                <PreloaderPage />
            )}
        </>
    );
};

export default Cabinet;
