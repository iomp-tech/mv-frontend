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
    const {size} = useSelector(({visually}) => visually);
    const {integration} = useSelector(({integration_page}) => integration_page);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            const script = document.createElement("script");

            const scriptText = document.createTextNode(integration.cabinetJs);

            script.appendChild(scriptText);
            
			document.querySelector("#vanila__js__page").innerHTML = "";
            document.querySelector("#vanila__js__page").appendChild(script);

            document.querySelector("#tags__js__page").innerHTML =
                integration.cabinetHtml;
        }
    }, [Object.keys(integration).length]);

    const onSubmitEditInfo = (formData) => {
        dispatch(fetchEditUserInfo(formData));
    };

    const onSubmitEditPassword = (formData) => {
        dispatch(fetchEditUserPassword(formData));
    };

    return (
        <>
            <Helmet>
                <title>Личный кабинет - IOMP</title>
            </Helmet>
            {isLoaded ? (
                <>
                    {isLogin ? (
                        <>
                            {user.confirmed ? (
                                <section className="cabinet">
                                    <div className="container">
                                        <div className="cabinet-wrapper">
                                            <h2
                                                className={`title ${size} cabinet__title`}
                                            >
                                                Личный кабинет
                                            </h2>

                                            <CabinetCartUser
                                                size={size}
                                                {...user}
                                            />

                                            <CabinetEditInfoForm
                                                size={size}
                                                onSubmit={onSubmitEditInfo}
                                                {...user}
                                            />

                                            <CabinetEditPasswordForm
                                                size={size}
                                                onSubmit={onSubmitEditPassword}
                                            />
                                        </div>
                                    </div>
                                </section>
                            ) : (
                                <section className="error">
                                    <div className="container">
                                        <div className="error-wrapper">
                                            <h2
                                                className={`error__title ${size}`}
                                            >
                                                <span>Подтвердите</span> ваш
                                                email
                                            </h2>
                                            <p
                                                className={`error__subtitle ${size}`}
                                            >
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
                                                className={`btn-bold_color error__btn ${size}`}
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
