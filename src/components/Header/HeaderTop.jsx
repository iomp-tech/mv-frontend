import React from "react";
import { NavLink } from "react-router-dom";

const HeaderTop = () => {
    return (
        <>
            <div className="header-wrapper-top">
                <div className="header-wrapper-top-nav">
                    <NavLink
                        to="/feedback"
                        className="header__link"
                        activeClassName="header__link_active"
                    >
                        Отзывы
                    </NavLink>
                </div>
            </div>
        </>
    );
};
export default HeaderTop;
