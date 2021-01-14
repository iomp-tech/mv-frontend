import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import axios from "axios";

import FooterForm from "./FooterForm";
import FooterMenu from "./FooterMenu";

import {
    fetchFooterMenu,
    fetchFooterContact,
} from "../.././redux/actions/footer";

import {API_DOMEN} from "../.././api";

const Footer = () => {
    const dispatch = useDispatch();

    const [stateForm, setStateForm] = React.useState(false);
    const {menu, contact, isLoaded} = useSelector(({footer}) => footer);

    React.useEffect(() => {
        if (!menu.length) {
            dispatch(fetchFooterMenu());
        }
        if (!contact.length) {
            dispatch(fetchFooterContact());
        }
    }, []);

    const onSubmit = (formData) => {
        axios
            .post(`${API_DOMEN}/subscribe/mailing`, formData)
            .then((response) => {
                setStateForm(true);
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

                                    <FooterMenu footerMenu={menu} />
                                </div>
                                <div className="footer-middle">
                                    <div className="footer-middle-left">
                                        {/* <div className="footer-social">
                                            <a
                                                href={contact.facebook}
                                                className="footer-social__link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="https://imeninik.ru/api/public/storage/all/facebook.svg"
                                                    alt="facebook"
                                                    className="footer-social__img"
                                                />
                                            </a>
                                            <a
                                                href={contact.inst}
                                                className="footer-social__link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="https://imeninik.ru/api/public/storage/all/instagram.svg"
                                                    alt="instagram"
                                                    className="footer-social__img"
                                                />
                                            </a>
                                            <a
                                                href={contact.vk}
                                                className="footer-social__link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="https://imeninik.ru/api/public/storage/all/vk.svg"
                                                    alt="vk"
                                                    className="footer-social__img"
                                                />
                                            </a>
                                            <a
                                                href={contact.youtube}
                                                className="footer-social__link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="https://imeninik.ru/api/public/storage/all/youtube.svg"
                                                    alt="youtube"
                                                    className="footer-social__img"
                                                />
                                            </a>
                                            <a
                                                href={contact.telegram}
                                                className="footer-social__link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="https://imeninik.ru/api/public/storage/all/telegram.svg"
                                                    alt="telegram"
                                                    className="footer-social__img"
                                                />
                                            </a>
                                        </div> */}

                                        <div className="footer-contact">
                                            <p className="footer__adres">
                                                {contact.adres}
                                            </p>
                                            <a
                                                href={`tel:${contact.phone}`}
                                                className="footer__link footer-middle__link"
                                            >
                                                {contact.phone}
                                            </a>
                                            <a
                                                href={`mailto:${contact.email}`}
                                                className="footer__link footer-middle__link"
                                            >
                                                {contact.email}
                                            </a>
                                        </div>
                                    </div>
                                    {/* <div className="footer-middle-right">
                                        <FooterForm
                                            onSubmit={onSubmit}
                                            stateForm={stateForm}
                                        />
                                    </div> */}
                                </div>
                            </div>

                            <div className="footer-bottom">
                                <div className="footer-bottom-left">
                                    ООО «ИСП» 1197746615736 ИНН 7727431274 КПП
                                    772701001 Расчетный
                                    счет:40702810510000593883
                                </div>
                                <div className="footer-bottom-right">
                                    {/* {footer.footerLink &&
                                footer.footerLink.map((obj, index) => (
                                    <a
                                        href={obj.href}
                                        className="footer__link footer-bottom__link"
                                        key={`${obj.href}_${obj.index}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {obj.title}
                                    </a>
                                ))} */}
                                    <p className="footer__comp">
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
