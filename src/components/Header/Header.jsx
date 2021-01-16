import React from "react";
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import ScrollToTop from "react-scroll-up";

import {fetchUser} from "../.././redux/actions/user";

import HeaderCart from "./HeaderCart";
import HeaderModal from "./HeaderModal";

const Header = React.memo(() => {
    const dispatch = useDispatch();

    const {user, isLoaded, isLogin} = useSelector(({user}) => user);

    React.useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <>
            <ScrollToTop
                showUnder={500}
                duration={1000}
                style={{zIndex: "1000"}}
            >
                <div className="topup">
                    <svg
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M51 26C51 12.1929 39.8071 1 26 1C12.1929 1 1 12.1929 1 26C1 39.8071 12.1929 51 26 51C39.8071 51 51 39.8071 51 26Z"
                            fill="white"
                            stroke="#3A38DC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M36 26L26 16L16 26"
                            stroke="#3A38DC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M26 36V16"
                            stroke="#3A38DC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </ScrollToTop>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <Link to="/">
                            <img
                                src="https://iomp.ru/api/public/storage/all/logo.svg"
                                alt="IOMP"
                                className="header-logo__img"
                            />
                        </Link>

                        <nav className="header-nav">
                            <Link
                                to="/shop"
                                className="btn-regular_color header__btn"
                            >
                                Магазин курсов
                            </Link>

                            <div className="header-menu-hidden">
                                {/* <NavLink
                                    to="/timetable"
                                    className="header__link"
                                    activeClassName="header__link_active"
                                >
                                    Расписание
                                </NavLink> */}
                                <NavLink
                                    to="/teachers"
                                    className="header__link"
                                    activeClassName="header__link_active"
                                >
                                    Преподаватели
                                </NavLink>
                                <NavLink
                                    to="/institute"
                                    className="header__link"
                                    activeClassName="header__link_active"
                                >
                                    Сведения об образовательной организации
                                </NavLink>
                                {/* <NavLink
                                    to="/magazine"
                                    className="header__link"
                                    activeClassName="header__link_active"
                                >
                                    Журнал
                                </NavLink> */}
                            </div>

                            {/* <HeaderCart headerMobail={true} /> */}

                            <HeaderModal isLogin={isLogin} />
                        </nav>

                        {/* <div className="header-right">
                            <HeaderCart headerMobail={false} />

                            <>
                                {isLoaded ? (
                                    <>
                                        {isLogin ? (
                                            <div className="header-user">
                                                <div className="header-user__img-wrapper">
                                                    <div
                                                        style={{
                                                            backgroundImage: `url(${
                                                                user.avatar !==
                                                                "default"
                                                                    ? user.avatar
                                                                    : "https://imeninik.ru/api/public/storage/all/default_avatar.svg"
                                                            })`,
                                                        }}
                                                        className="header-user__img"
                                                    ></div>
                                                </div>
                                                <svg
                                                    width="15"
                                                    height="9"
                                                    viewBox="0 0 15 9"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <line
                                                        x1="0.353553"
                                                        y1="0.646447"
                                                        x2="7.42462"
                                                        y2="7.71751"
                                                        stroke="black"
                                                    />
                                                    <line
                                                        x1="6.64645"
                                                        y1="7.71752"
                                                        x2="13.7175"
                                                        y2="0.646454"
                                                        stroke="black"
                                                    />
                                                </svg>
                                                <div className="header-user-menu">
                                                    <Link
                                                        to="/library"
                                                        className="header-user-menu__link"
                                                    >
                                                        <img
                                                            src="https://imeninik.ru/api/public/storage/all/book.svg"
                                                            alt="Мои курсы"
                                                        />
                                                        Мои курсы
                                                    </Link>
                                                    <Link
                                                        to="/cabinet"
                                                        className="header-user-menu__link"
                                                    >
                                                        <img
                                                            src="https://imeninik.ru/api/public/storage/all/setting.svg"
                                                            alt="Настройки"
                                                        />
                                                        Настройки
                                                    </Link>
                                                    <Link
                                                        to="/logout"
                                                        className="header-user-menu__link"
                                                    >
                                                        <img
                                                            src="https://imeninik.ru/api/public/storage/all/logout.svg"
                                                            alt="Выйти"
                                                        />
                                                        Выйти
                                                    </Link>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to="/login"
                                                className="header-login"
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M13.2608 10.6522H0.652174C0.292173 10.6522 0 10.3601 0 10.0001C0 9.64007 0.292173 9.3479 0.652174 9.3479H13.2608C13.6208 9.3479 13.913 9.64007 13.913 10.0001C13.913 10.3601 13.6208 10.6522 13.2608 10.6522Z" />
                                                    <path d="M9.78287 14.1303C9.61585 14.1303 9.44899 14.0669 9.32193 13.9391C9.06717 13.6843 9.06717 13.2713 9.32193 13.0164L12.3393 9.9991L9.32193 6.98168C9.06717 6.72692 9.06717 6.31374 9.32193 6.05899C9.57684 5.80423 9.98986 5.80423 10.2446 6.05899L13.7228 9.53736C13.9776 9.79211 13.9776 10.2051 13.7228 10.4599L10.2446 13.9381C10.1168 14.0669 9.9499 14.1303 9.78287 14.1303Z" />
                                                    <path d="M10.4345 19.5654C6.47703 19.5654 2.98321 17.1845 1.5319 13.4992C1.39975 13.1653 1.56486 12.7862 1.89971 12.654C2.2336 12.5236 2.61366 12.6862 2.74581 13.0228C3.99889 16.2045 7.01711 18.261 10.4345 18.261C14.9892 18.261 18.6954 14.5548 18.6954 10.0001C18.6954 5.44538 14.9892 1.73916 10.4345 1.73916C7.01711 1.73916 3.99889 3.79568 2.74581 6.97741C2.6127 7.31401 2.2336 7.47657 1.89971 7.34617C1.56486 7.21402 1.39975 6.83491 1.5319 6.50102C2.98321 2.81566 6.47703 0.434814 10.4345 0.434814C15.7084 0.434814 19.9998 4.72617 19.9998 10.0001C19.9998 15.274 15.7084 19.5654 10.4345 19.5654Z" />
                                                </svg>

                                                <span className="header-login__text">
                                                    Войти
                                                </span>
                                            </Link>
                                        )}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </>
                        </div> */}
                    </div>
                </div>
            </header>
        </>
    );
});

export default Header;
