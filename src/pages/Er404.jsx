import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";

const Er404 = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>404 - MASTER Vision</title>
            </Helmet>
            <section className="error">
                <div className="container">
                    <div className="error-wrapper">
                        <h2 className={`error__title`}>
                            Страница <span>не найдена,</span> либо еще
                            <span> не создана.</span>
                        </h2>
                        <Link
                            to="/"
                            className={`btn-bold_color error__btn`}
                        >
                            На главную страницу
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Er404;
