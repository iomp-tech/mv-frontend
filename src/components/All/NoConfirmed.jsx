import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const NoConfirmed = () => {
    const {size} = useSelector(({visually}) => visually);

    return (
        <section className="error">
            <div className="container">
                <div className="error-wrapper">
                    <h2 className={`error__title ${size}`}>
                        <span>Подтвердите</span> ваш email
                    </h2>
                    <p className={`error__subtitle ${size}`}>
                        На ваш email было отправлено письмо с ссылкой на
                        подтверждение аккаунта. Если письмо не пришло проверьте
                        папку "спам".{" "}
                        <Link to="/repeat">Отправить еще раз</Link>
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
    );
};

export default NoConfirmed;
