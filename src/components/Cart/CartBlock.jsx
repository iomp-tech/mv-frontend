import React from "react";
import NumberFormat from "react-number-format";

const CartBlock = React.memo(
    ({
        thumb,
        category,
        type,
        title,
        time,
        auth,
        sale,
        priceOld,
        price,
        href,
        id,
        RemoveCartItem,
        color,
        categories,
        types,
        teachers,
        API_DOMEN,
    }) => {
        return (
            <div className="cart-block">
                <a href={href} className="cart-block-left">
                    <div className={`cart-block-thumb`}>
                        <div
                            className="cart-block__img"
                            style={{
                                backgroundImage: `url(${
                                    thumb !== "default"
                                        ? thumb
                                        : `${API_DOMEN}/public/storage/all/default_avatar.svg`
                                })`,

                                transform: `${
                                    thumb !== "default"
                                        ? "none"
                                        : "rotate(90deg)"
                                }`,
                            }}
                        ></div>
                        {sale ? (
                            <span className="shop-block__sale">-{sale}%</span>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className={`cart-block-text`}>
                        <div className="cart-block-type-wrapper">
                            {category && (
                                <span
                                    className={`cart-block__type_color`}
                                >
                                    {categories[category] &&
                                        categories[category].title}
                                </span>
                            )}
                            {type && (
                                <span
                                    className={`cart-block__type_gray`}
                                >
                                    {types[type] && types[type].title}
                                </span>
                            )}
                            {auth &&
                                auth.map(
                                    (key) =>
                                        teachers[key] && (
                                            <span
                                                key={`teacher-${teachers[key].id}`}
                                                className={`cart-block__type_gray`}
                                            >
                                                {teachers[key].name}
                                            </span>
                                        )
                                )}
                        </div>
                        <h3
                            className={`cart-block__title`}
                            style={{color: color}}
                        >
                            {title}
                        </h3>
                        <span
                            className={`cart-block__time`}
                            style={{color: color}}
                        >
                            {time}
                        </span>
                    </div>
                </a>

                <div className="cart-block-right">
                    <div className="cart-block-price">
                        {sale ? (
                            <>
                                <span
                                    className={`shop-block__subprice`}
                                >
                                    {
                                        <NumberFormat
                                            value={priceOld}
                                            displayType={"text"}
                                            thousandSeparator={" "}
                                        />
                                    }
                                    ₽
                                </span>
                                <h3 className={`shop-block__price`}>
                                    {
                                        <NumberFormat
                                            value={price}
                                            displayType={"text"}
                                            thousandSeparator={" "}
                                        />
                                    }
                                    ₽
                                </h3>
                            </>
                        ) : (
                            <>
                                <span
                                    className={`shop-block__subprice`}
                                    style={{textDecoration: "none"}}
                                >
                                    Цена:
                                </span>
                                <h3 className={`shop-block__price`}>
                                    {
                                        <NumberFormat
                                            value={price}
                                            displayType={"text"}
                                            thousandSeparator={" "}
                                        />
                                    }
                                    ₽
                                </h3>
                            </>
                        )}
                    </div>
                    <div
                        href="#"
                        className="cart-block-delete"
                        onClick={() => RemoveCartItem(id)}
                    >
                        <svg
                            width="39"
                            height="38"
                            viewBox="0 0 39 38"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="2.70711"
                                y1="1.29289"
                                x2="38.0624"
                                y2="36.6482"
                                strokeWidth="2"
                            />
                            <line
                                x1="1.29289"
                                y1="36.6482"
                                x2="36.6482"
                                y2="1.2929"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
);

export default CartBlock;
