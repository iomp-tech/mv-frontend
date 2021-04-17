import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const NoConfirmed = () => {
    return (
        <section className="error">
            <div className="container">
                <div className="error-wrapper">
                    <h2 className={`error__title`}>
                        <span>Подтвердите</span> ваш email
                    </h2>
                    <p className={`error__subtitle`}>
                        На ваш email было отправлено письмо с ссылкой на
                        подтверждение аккаунта. Если письмо не пришло проверьте
                        папку "спам".{" "}
                        <Link to="/repeat">Отправить еще раз</Link>
                    </p>
                    <Link
                        to="/"
                        className={`btn-bold_color error__btn`}
                    >
                        На главную страницу
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NoConfirmed;
