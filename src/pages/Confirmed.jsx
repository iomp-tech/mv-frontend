import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import axios from "axios";

import {PreloaderPage} from ".././components";

import {API_DOMEN} from ".././api";

const Confirmed = (props) => {
    const hash = props.match.params.hash;

    const [stateHash, setStateHash] = React.useState(null);

	React.useEffect(() => {
		window.scrollTo(0, 0);
		
        axios
            .post(`${API_DOMEN}/confirmed`, {hash: hash})
            .then((response) => {
                setStateHash(true);
            })
            .catch((error) => {
                setStateHash(false);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>Подтверждение email - MasterVision</title>
			</Helmet>
			
            {stateHash !== null ? (
                <section className="error">
                    <div className="container">
                        <div className="error-wrapper">
                            {stateHash ? (
                                <h2 className="error__title">
                                    Спасибо, ваш <span>email подтвержден</span>
                                </h2>
                            ) : (
                                <>
                                    <h2 className="error__title">
                                        Ссылка <span>устарела</span>
                                    </h2>
                                    <p className="error__subtitle">
                                        Ваша ссылка на подтверждение аккаунта
                                        устарела. Если письмо не пришло
                                        проверьте папку "спам".{" "}
                                        <Link to="/repeat">
                                            Отправить еще раз
                                        </Link>
                                    </p>
                                </>
                            )}
                            <Link to="/" className="btn-bold_color error__btn">
                                На главную страницу
                            </Link>
                        </div>
                    </div>
                </section>
            ) : (
                <PreloaderPage />
            )}
        </>
    );
};

export default Confirmed;
