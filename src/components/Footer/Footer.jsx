import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import FooterForm from "./FooterForm";
import FooterMenu from "./FooterMenu";

import {
    fetchFooterMenu,
    fetchFooterContact,
    fetchFooterSocial,
    fetchFooterLegal,
} from "../.././redux/actions/footer";

import {fetchEmailForm} from "../../redux/actions/emailForm";

import {DOMEN} from "../../api";

const Footer = () => {
    const dispatch = useDispatch();

    const {menu, contact, social, legal, isLoaded} = useSelector(
        ({footer}) => footer
    );
    const {form} = useSelector(({emailForm}) => emailForm);
    const isLoadedForm = useSelector(({emailForm}) => emailForm.isLoaded);

    React.useEffect(() => {
        if (!menu.length) {
            dispatch(fetchFooterMenu());
        }
        if (!contact.length) {
            dispatch(fetchFooterContact());
        }
        if (!social.length) {
            dispatch(fetchFooterSocial());
        }
        if (!legal.length) {
            dispatch(fetchFooterLegal());
        }
    }, []);

    React.useEffect(() => {
        if (!Object.keys(form).length) {
            dispatch(fetchEmailForm());
        }
    }, []);

    return (
        <>
            {isLoaded && isLoadedForm ? (
                <footer className="footer">
                    <div className="container">
                        <div className="footer-wrapper">
                            <div className="footer-media">
                                <div className={`footer-top`}>
                                    <Link to="/" className="footer-logo__link">
                                        <img
                                            src={`${DOMEN}/public/storage/all/logo-white.svg`}
                                            alt="MASTER Vision"
                                            className="footer-logo__img"
                                        />
                                    </Link>

                                    <FooterMenu footerMenu={menu} />
                                </div>
                                <div className="footer-middle">
                                    <div className="footer-middle-left">
                                        <div className="footer-social">
                                            {social &&
                                                social.map((arr, index) => (
                                                    <a
                                                        key={`footer-social-${index}`}
                                                        href={arr.href}
                                                        className="footer-social__link"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img
                                                            src={arr.icon}
                                                            alt={arr.title}
                                                            className="footer-social__img"
                                                        />
                                                    </a>
                                                ))}
                                        </div>

                                        <div className={`footer-contact`}>
                                            <p className={`footer__adres`}>
                                                {contact.adres}
                                            </p>
                                            {contact.phones &&
                                                contact.phones.map(
                                                    (phone, index) => (
                                                        <a
                                                            key={`footer-phone-${index}`}
                                                            href={`tel:${phone.phone}`}
                                                            className={`footer__link footer-middle__link`}
                                                        >
                                                            {phone.phone}
                                                        </a>
                                                    )
                                                )}

                                            <a
                                                href={`mailto:${contact.email}`}
                                                className={`footer__link footer-middle__link`}
                                            >
                                                {contact.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="footer-middle-right">
                                        <FooterForm {...form} />
                                    </div>
                                </div>
                            </div>
                            <div className="footer-bottom">
                                <div className={`footer-bottom-left`}>
                                    {legal.length &&
                                        legal.map((item, index) => (
                                            <span key={`footer-legal-${index}`}>
                                                {item.string} <br />
                                            </span>
                                        ))}
                                </div>
                                <div className="footer-bottom-right">
                                    <p className={`footer__comp`}>
                                        © MASTER Vision{" "}
                                        {new Date().getFullYear()}
                                    </p>
                                </div>
                            </div>
                            <div className="footer-bottom-bottom">
                                <div className="footer-bottom-bottom-link">
                                    <Link
                                        to="/privacy"
                                        className={`footer-bottom-bottom__link`}
                                    >
                                        Политика конфиденциальности
                                    </Link>
                                    <Link
                                        to="/public-offer"
                                        className={`footer-bottom-bottom__link`}
                                    >
                                        Публичная оферта
                                    </Link>
                                </div>

                                {/* Hi, we are Nagibin's studio */}
                                <div className="nagibinstudio">
                                    <a href="https://nagibinstudio.ru">
                                        <img
                                            src="https://api.nagibinstudio.ru:5000/all/nagibin-develompent.svg"
                                            alt=""
                                            className="nagibinstudio__img"
                                            style={{
                                                width: "300px",
                                                userSelect: "none",
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            ) : null}
        </>
    );
};

export default Footer;
