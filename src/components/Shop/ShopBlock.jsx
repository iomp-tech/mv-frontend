import React from "react";
import NumberFormat from "react-number-format";
import {Link} from "react-router-dom";

const ShopBlock = React.memo(
    ({
        thumb,
        category,
        type,
        title,
        time,
        sale,
        expensive,
        priceOld,
        price,
        expensiveText,
        id,
        href,
        auth,
        onClickAddGoods,
        onClickPush,
        categories,
        types,
        auths,
        awo_shop_title,
        awo_shop,
        awo_shop_storage,
        url,
        isLoadedLimit = true,
        DOMEN,
    }) => {
        const authArr = [];

        Object.keys(auth).map((key) => {
            if (auths[parseInt(auth[key])]) {
                authArr.push(auths[parseInt(auth[key])].name);
            }
        });

        const setUpdateGoods = () => {
            const obj = {
                id,
                awo_shop,
            };

            onClickAddGoods(obj);
            onClickPush();
        };

        return (
            <div
                className="shop-block"
                style={{opacity: isLoadedLimit ? "" : "0.3"}}
            >
                <div className={`shop-block-left`}>
                    <div className={`shop-block-thumb`}>
                        <div
                            className="shop-block__img"
                            style={{
                                backgroundImage: `url(${
                                    thumb !== "default"
                                        ? thumb
                                        : `${DOMEN}/public/storage/all/default_avatar.svg`
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
                        ) : null}
                    </div>
                    <div className="shop-block-text">
                        <div className="shop-block-type-wrapper">
                            {Object.keys(categories).length
                                ? categories[category] && (
                                      <span
                                          className={`shop-block__type_color`}
                                      >
                                          {categories[category].title}
                                      </span>
                                  )
                                : null}

                            {Object.keys(types).length ? (
                                types[type] ? (
                                    <span className={`shop-block__type_gray`}>
                                        {types[type].title}
                                    </span>
                                ) : null
                            ) : null}

                            {Object.keys(auths).length
                                ? auth.map((key) =>
                                      auths[key] ? (
                                          <span
                                              className={`shop-block__type_gray`}
                                              key={`${auths[key].name}_${key}`}
                                          >
                                              {auths[key].name}
                                          </span>
                                      ) : null
                                  )
                                : null}
                        </div>
                        <h3 className="shop-block__title">{title}</h3>
                        <span className="shop-block__time">{time}</span>

                        {awo_shop_storage !== awo_shop && awo_shop_storage ? (
                            <span className="shop-block__awo">
                                {awo_shop_title}
                            </span>
                        ) : (
                            <span className="shop-block__awo_color">
                                {awo_shop_title}
                            </span>
                        )}
                    </div>
                </div>

                <div className={`shop-block-right`}>
                    <div className={`shop-block-price`}>
                        {expensive ? (
                            <>
                                <span
                                    className={`shop-block__subprice`}
                                    style={{textDecoration: "none"}}
                                >
                                    Цена:
                                </span>
                                <h3 className={`shop-block__price`}>
                                    {expensiveText}
                                </h3>
                            </>
                        ) : (
                            <>
                                {sale ? (
                                    <>
                                        <span
                                            className={`shop-block__subprice`}
                                        >
                                            <NumberFormat
                                                value={priceOld}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                            />
                                            ₽
                                        </span>
                                        <h3 className={`shop-block__price`}>
                                            <NumberFormat
                                                value={price}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                            />
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
                                            <NumberFormat
                                                value={price}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                            />
                                            ₽
                                        </h3>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                    {expensive ? (
                        <a
                            href={href}
                            target="_blank"
                            className={`btn-bold_color shop-block__btn`}
                        >
                            Подробнее
                        </a>
                    ) : (
                        <div className="shop-block-btn">
                            {awo_shop_storage !== awo_shop &&
                            awo_shop_storage ? (
                                <>
                                    <div className="shop-block-btn-annotation">
                                        <span className="shop-block-btn-annotation__title">
                                            ?
                                        </span>
                                        <p className="shop-block-btn-annotation__text">
                                            У вас в корзине уже находиться
                                            товар. Завершите оформление прежде
                                            чем добавить новый товар.
                                        </p>
                                    </div>
                                    <button
                                        className={`btn-bold_color btn-bold_color_disabled shop-block__btn`}
                                    >
                                        Добавить в корзину
                                    </button>
                                </>
                            ) : (
                                <button
                                    className={`btn-bold_color shop-block__btn`}
                                    onClick={setUpdateGoods}
                                >
                                    Добавить в корзину
                                </button>
                            )}
                            {url ? (
                                <Link
                                    className="shop-block__link"
                                    to={`/shop/pages/${url}`}
                                >
                                    Подробнее
                                </Link>
                            ) : null}
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

export default ShopBlock;
