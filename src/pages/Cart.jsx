import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";

import {
    ShopSection,
    MagazineSection,
    EmailFormWrapper,
    CartBlock,
} from ".././components/";

import {removeCartItem} from "../redux/actions/cart";

const Cart = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const cartItems = useSelector(({cart}) => cart.cart);
    const {totalPrice} = useSelector(({cart}) => cart);
    const {user, isLoaded, isLogin} = useSelector(({user}) => user);
    const {size, color, type} = useSelector(({visually}) => visually);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const clickRemoveCartItem = React.useCallback(
        (id) => {
            dispatch(removeCartItem(id));
        },
        [dispatch]
    );

    return (
        <>
            <Helmet>
                <title>Корзина - IOMP</title>
            </Helmet>
            <section className="cart">
                <div className="container">
                    <div className="cart-wrapper">
                        {Object.keys(cartItems).length ? (
                            <>
                                <div className="cart-block-top">
                                    <h2 className={`title ${size} cart__title`}>
                                        Корзина
                                    </h2>
                                    <span className={`cart__number ${size}`}>
                                        {Object.keys(cartItems).length}
                                    </span>
                                </div>

                                <div className="cart-block-wrapper">
                                    {Object.keys(cartItems).map((index) => (
                                        <CartBlock
                                            key={cartItems[index].id}
                                            size={size}
                                            color={color}
                                            RemoveCartItem={clickRemoveCartItem}
                                            {...cartItems[index]}
                                        />
                                    ))}
                                </div>
                                {isLogin ? (
                                    <>
                                        {parseInt(user.confirmed) ? (
                                            <form
                                                action="https://shop.mastervision.su/?r=ordering/cart/s1&lg=ru"
                                                method="post"
                                                encType="application/x-www-form-urlencoded"
                                                acceptCharset="UTF-8"
                                            >
                                                <div className="cart-block-bottom">
                                                    <h3
                                                        className={`cart__total ${size}`}
                                                    >
                                                        <span>Итого:</span>{" "}
                                                        {totalPrice}₽
                                                    </h3>

                                                    {Object.keys(cartItems).map(
                                                        (index) => (
                                                            <input
                                                                type="hidden"
                                                                value="1"
                                                                name={`Goods[${cartItems[index].idAwo}]`}
                                                                key={`${cartItems[index].idAwo}_${cartItems[index].title}`}
                                                            />
                                                        )
                                                    )}

                                                    <input
                                                        name="CartAccount[name]"
                                                        type="hidden"
                                                        value={
                                                            isLoaded
                                                                ? user.name
                                                                : ""
                                                        }
                                                    />
                                                    <input
                                                        name="CartAccount[email]"
                                                        type="hidden"
                                                        value={
                                                            isLoaded
                                                                ? user.email
                                                                : ""
                                                        }
                                                    />

                                                    <button
                                                        type="submit"
                                                        className={`btn-bold_color cart__btn ${size}`}
                                                    >
                                                        Оформить заказ
                                                    </button>
                                                </div>
                                            </form>
                                        ) : (
                                            history.push("/cabinet")
                                        )}
                                    </>
                                ) : (
                                    <div className="cart-block-bottom">
                                        <h3 className={`cart__total ${size}`}>
                                            <span>Итого:</span> {totalPrice}₽
                                        </h3>

                                        <Link
                                            to="/login"
                                            className={`btn-bold_color cart__btn ${size}`}
                                        >
                                            Войдите в аккаунт или создайте его
                                        </Link>
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                <div className="cart-null">
                                    {type === "blackWhite" ? (
                                        <div
                                            className={`circle-bold cart-null-bg ${size}`}
                                        ></div>
                                    ) : null}

                                    <h2 className={`cart-null__title ${size}`}>
                                        Ваша корзина пуста
                                    </h2>

                                    <Link
                                        to="/shop"
                                        className={`btn-bold_color cart-null__btn ${size}`}
                                    >
                                        Перейти в магазин курсов
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
            <ShopSection />
            <MagazineSection />
            <EmailFormWrapper />
        </>
    );
};

export default Cart;
