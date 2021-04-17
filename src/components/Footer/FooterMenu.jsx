import React from "react";
import {Link} from "react-router-dom";

const FooterMenu = ({footerMenu}) => {
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
        <nav className={`footer-nav`}>
            <Link to="/shop" className={`footer-nav__btn`}>
                Магазин курсов
            </Link>
            {footerMenuBlock &&
                footerMenuBlock.map((objs, index) => (
                    <div className={`footer-nav-block`} key={index}>
                        {objs &&
                            objs.map((obj, index) => (
                                <span key={`footer-menu-${index}`}>
                                    {obj.local ? (
                                        <Link
                                            to={`/${obj.href}`}
                                            className={`footer-nav__link`}
                                        >
                                            {obj.title}
                                        </Link>
                                    ) : (
                                        <a
                                            href={obj.href}
                                            className={`footer-nav__link`}
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
