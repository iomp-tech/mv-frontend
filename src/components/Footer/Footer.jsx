import React from "react";
import axios from "axios";
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

import {DOMEN, PRIVACY_POLICY} from "../../api";

const Footer = () => {
    const dispatch = useDispatch();

    const {menu, contact, social, legal, isLoaded} = useSelector(
        ({footer}) => footer
    );
    const {form} = useSelector(({emailForm}) => emailForm);

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

    const onSubmit = (formData) => {
        const newData = {
            Contact: {
                email: formData.email,
                id_newsletter: form.id_awo,
                id_advertising_channel_page: 0,
            },
            required_fields: {
                email: 1,
            },
            formId: form.formId,
            formVc: form.formVc,
            _aid: "",
            _vcaid: "",
        };

        axios
            .post(form.action, newData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                window.location.href = form.action;
            })
            .catch(() => {
                return false;
            });
    };

    return (
        <>
            {isLoaded ? (
                <footer className="footer">
                    <div className="container">
                        <div className="footer-wrapper">
                            <div className="footer-media">
                                <div className={`footer-top`}>
                                    <Link to="/" className="footer-logo__link">
                                        <img
                                            src={`${DOMEN}/public/storage/all/logo-white.svg`}
                                            alt="MasterVision"
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
                                        <FooterForm onSubmit={onSubmit} />
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
                                        © MasterVision{" "}
                                        {new Date().getFullYear()}
                                    </p>
                                </div>
                            </div>
                            <div className="footer-bottom-bottom">
                                <a
                                    href={PRIVACY_POLICY}
                                    className="footer-bottom-bottom__link"
                                    target="_blank"
                                >
                                    Политика конфиденциальности
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            ) : null}
        </>
    );
};

export default Footer;
