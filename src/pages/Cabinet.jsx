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
    NoConfirmed,
} from ".././components";

const Cabinet = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {isLogin, isLoaded, user} = useSelector(({user}) => user);
    const {integration} = useSelector(({integration_page}) => integration_page);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                integration.cabinetTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                integration.cabinetTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                integration.cabinetBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                integration.cabinetBottomHtml;
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
                <title>Личный кабинет - MasterVision</title>
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
                                                className={`title cabinet__title`}
                                            >
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
                                <NoConfirmed />
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
