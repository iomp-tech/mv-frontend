import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import FooterForm from "./FooterForm";
import FooterMenu from "./FooterMenu";

import {
    fetchFooterMenu,
    fetchFooterContact,
    fetchFooterSocial,
} from "../.././redux/actions/footer";

import {fetchEmailForm} from "../../redux/actions/emailForm";

const Footer = () => {
    const dispatch = useDispatch();

    const {menu, contact, social, isLoaded} = useSelector(({footer}) => footer);
    const {form} = useSelector(({emailForm}) => emailForm);
    const isLoadedForm = useSelector(({emailForm}) => emailForm.isLoaded);
    const {size} = useSelector(({visually}) => visually);

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
    }, []);

    React.useEffect(() => {
        if (!Object.keys(form).length) {
            dispatch(fetchEmailForm());
        }
    }, []);

    const [errorForm, setErrorForm] = React.useState({});

    const checkInput = (e) => {
        const value = e.target.value;

        const errors = {};

        const defaultMin = 2;
        const defaultMax = 255;

        if (!value) {
            errors.email = "Поле не может быть пустым";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errors.email = "Неверный email";
        } else if (value.length > defaultMax) {
            errors.email = `Не более ${defaultMax} символов`;
        } else if (value.length < defaultMin) {
            errors.email = `Не менее ${defaultMin} символов`;
        }

        setErrorForm({
            email: errors.email,
            confirmation: errorForm.confirmation,
        });
    };

    const checkBox = (e) => {
        const value = e.target.checked;

        const errors = {};

        if (!value) {
            errors.confirmation = "Поставьте галочку";
        }

        setErrorForm({
            confirmation: errors.confirmation,
            email: errorForm.email,
        });
    };

    return (
        <>
            {isLoaded ? (
                <footer className="footer">
                    <div className="container">
                        <div className="footer-wrapper">
                            <div className="footer-media">
                                <div className="footer-top">
                                    <Link to="/" className="footer-logo__link">
                                        <img
                                            src="https://iomp.ru/api/public/storage/all/logo-white.svg"
                                            alt="IOMP"
                                            className="footer-logo__img"
                                        />
                                    </Link>

                                    <FooterMenu footerMenu={menu} size={size} />
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
                                            <p
                                                className={`footer__adres ${size}`}
                                            >
                                                {contact.adres}
                                            </p>
                                            <a
                                                href={`tel:${contact.phone}`}
                                                className={`footer__link ${size} footer-middle__link`}
                                            >
                                                {contact.phone}
                                            </a>
                                            <a
                                                href={`mailto:${contact.email}`}
                                                className={`footer__link ${size} footer-middle__link`}
                                            >
                                                {contact.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="footer-middle-right">
                                        <FooterForm
                                            size={size}
                                            isLoaded={isLoadedForm}
                                            checkBox={checkBox}
                                            checkInput={checkInput}
                                            errorForm={errorForm}
                                            {...form}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="footer-bottom">
                                <div className={`footer-bottom-left ${size}`}>
                                    ООО «ИСП» ОГРН 1197746615736
                                    <br />
                                    ИНН 7727431274
                                    <br />
                                    КПП 772701001
                                </div>
                                <div className="footer-bottom-right">
                                    <p className={`footer__comp ${size}`}>
                                        © IOMP {new Date().getFullYear()}
                                    </p>
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
