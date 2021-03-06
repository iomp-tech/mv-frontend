import React from "react";
import {Link} from "react-router-dom";

const FooterMenu = ({footerMenu, size}) => {
    let footerMenuLn;
    let footerMenuBlock;

    if (footerMenu !== undefined) {
        footerMenuLn = 3;
        footerMenuBlock = [
            ...Array(Math.ceil(footerMenu.length / footerMenuLn)),
        ].map((n, i) =>
            footerMenu.slice(i * footerMenuLn, (i + 1) * footerMenuLn)
        );
    }

    return (
        <nav className={`footer-nav ${size}`}>
            <Link to="/shop" className={`footer-nav__btn ${size}`}>
                Магазин курсов
            </Link>
            {footerMenuBlock &&
                footerMenuBlock.map((objs, index) => (
                    <div className={`footer-nav-block ${size}`} key={index}>
                        {objs &&
                            objs.map((obj, index) => (
                                <span key={`footer-menu-${index}`}>
                                    {obj.local ? (
                                        <Link
                                            to={`/${obj.href}`}
                                            className={`footer-nav__link ${size}`}
                                        >
                                            {obj.title}
                                        </Link>
                                    ) : (
                                        <a
                                            href={obj.href}
                                            className={`footer-nav__link ${size}`}
                                            target="_blank"
                                        >
                                            {obj.title}
                                        </a>
                                    )}
                                </span>
                            ))}
                    </div>
                ))}
        </nav>
    );
};

export default FooterMenu;
