import React from "react";
import NumberFormat from "react-number-format";

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
        idAwo,
        isLoadedLimit = true,
        size,
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
            };

            onClickAddGoods(obj);
            onClickPush();
        };

        return (
            <div
                className="shop-block"
                style={{opacity: isLoadedLimit ? "" : "0.3"}}
            >
                <div className={`shop-block-left ${size}`}>
                    <div className={`shop-block-thumb ${size}`}>
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
                    <div className={`shop-block-text ${size}`}>
                        <div className="shop-block-type-wrapper">
                            {Object.keys(categories).length
                                ? categories[category] && (
                                      <span
                                          className={`shop-block__type_color ${size}`}
                                      >
                                          {categories[category].title}
                                      </span>
                                  )
                                : null}

                            {Object.keys(types).length ? (
                                types[type] ? (
                                    <span
                                        className={`shop-block__type_gray ${size}`}
                                    >
                                        {types[type].title}
                                    </span>
                                ) : null
                            ) : null}

                            {Object.keys(auths).length
                                ? auth.map((key) =>
                                      auths[key] ? (
                                          <span
                                              className={`shop-block__type_gray ${size}`}
                                              key={`${auths[key].name}_${key}`}
                                          >
                                              {auths[key].name}
                                          </span>
                                      ) : null
                                  )
                                : null}
                        </div>
                        <h3 className={`shop-block__title ${size}`}>{title}</h3>
                        <span className={`shop-block__time ${size}`}>
                            {time}
                        </span>
                    </div>
                </div>

                <div className={`shop-block-right ${size}`}>
                    <div className={`shop-block-price ${size}`}>
                        {expensive ? (
                            <>
                                <span
                                    className={`shop-block__subprice ${size}`}
                                    style={{textDecoration: "none"}}
                                >
                                    Цена:
                                </span>
                                <h3 className={`shop-block__price ${size}`}>
                                    {expensiveText}
                                </h3>
                            </>
                        ) : (
                            <>
                                {sale ? (
                                    <>
                                        <span
                                            className={`shop-block__subprice ${size}`}
                                        >
                                            <NumberFormat
                                                value={priceOld}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                            />
                                            ₽
                                        </span>
                                        <h3
                                            className={`shop-block__price ${size}`}
                                        >
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
                                            className={`shop-block__subprice ${size}`}
                                            style={{textDecoration: "none"}}
                                        >
                                            Цена:
                                        </span>
                                        <h3
                                            className={`shop-block__price ${size}`}
                                        >
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
                            className={`btn-bold_color shop-block__btn ${size}`}
                        >
                            Подробнее
                        </a>
                    ) : (
                        <button
                            className={`btn-bold_color shop-block__btn ${size}`}
                            onClick={setUpdateGoods}
                        >
                            Добавить в корзину
                        </button>
                    )}
                </div>
            </div>
        );
    }
);

export default ShopBlock;
