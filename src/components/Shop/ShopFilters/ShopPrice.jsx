import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setGoodsFilters} from "../../.././redux/actions/goods";

import ShopPriceRange from "./ShopPriceRange";

const ShopPrice = React.memo(() => {
    const dispatch = useDispatch();

    const {filters, minPrice, maxPrice} = useSelector(({goods}) => goods);

    const [stateRange, setStateRange] = React.useState({
        value: [minPrice, maxPrice],
    });

    React.useEffect(() => {
        if (filters.price.min !== null && filters.price.max !== null) {
            setStateRange({value: [filters.price.min, filters.price.max]});
		} else {
			setStateRange({value: [minPrice, maxPrice]});
		}
    }, [filters.price.min, filters.price.max]);

    const setMinInput = (event) => {
        if (event.target.value >= 0) {
            setStateRange({value: [event.target.value, stateRange.value[1]]});
        }
    };

    const setMaxInput = (event) => {
        if (event.target.value >= 0) {
            setStateRange({value: [stateRange.value[0], event.target.value]});
        }
    };

    const setMinInputKey = (event) => {
        if (event.key === "Enter") {
            if (event.target.value > stateRange.value[1]) {
                setStateRange({
                    value: [stateRange.value[1], event.target.value],
                });
                postStateInput([stateRange.value[1], event.target.value]);
            } else {
                setStateRange({
                    value: [event.target.value, stateRange.value[1]],
                });
                postStateInput([event.target.value, stateRange.value[1]]);
            }
        }
    };

    const setMaxInputKey = (event) => {
        if (event.key === "Enter") {
            if (event.target.value < stateRange.value[0]) {
                setStateRange({
                    value: [event.target.value, stateRange.value[0]],
                });
                postStateInput([event.target.value, stateRange.value[0]]);
            } else {
                setStateRange({
                    value: [stateRange.value[0], event.target.value],
                });
                postStateInput([stateRange.value[0], event.target.value]);
            }
        }
    };

    const setInput = React.useCallback(
        (status) => {
            setStateRange({value: [status[0], status[1]]});
        },
        [setStateRange]
    );

    const clearMinInput = () => {
        setStateRange({value: [minPrice, stateRange.value[1]]});
        postStateInput([minPrice, stateRange.value[1]]);
    };

    const clearMaxInput = () => {
        setStateRange({value: [stateRange.value[0], maxPrice]});
        postStateInput([stateRange.value[0], maxPrice]);
    };

    const postStateInput = React.useCallback(
        (status) => {
			filters.price.min = status[0];
			filters.price.max = status[1];
            dispatch(setGoodsFilters(filters));
        },
        [filters, dispatch]
    );

    return (
        <div className="shop-filters-block-wrapper">
            <div className="shop-filters-block">
                <h3 className="shop-filters__title">Стоимость</h3>

                <div className="shop-filters-input">
                    <div className="input_small shop-filters__input">
                        <input
                            type="text"
                            value={
                                stateRange.value[0] !== minPrice
                                    ? stateRange.value[0]
                                    : ""
                            }
                            className="input__field_small shop-input__field_small"
                            onChange={(event) => setMinInput(event)}
                            onKeyPress={(event) => setMinInputKey(event)}
                            required
                        />
                        <label className="input__label_small shop-input__label">
                            от {minPrice}₽
                        </label>

                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 39 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={clearMinInput}
                            className={`shop-filters-input-clear ${
                                stateRange.value[0] === minPrice
                                    ? "shop-filters-input-clear__hidden"
                                    : ""
                            }`}
                        >
                            <line
                                x1="2.70711"
                                y1="1.29289"
                                x2="38.0624"
                                y2="36.6482"
                                stroke="black"
                                strokeWidth="2"
                            />
                            <line
                                x1="1.29289"
                                y1="36.6482"
                                x2="36.6482"
                                y2="1.2929"
                                stroke="black"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <div className="input_small shop-filters__input">
                        <input
                            type="text"
                            value={
                                stateRange.value[1] !== maxPrice
                                    ? stateRange.value[1]
                                    : ""
                            }
                            className="input__field_small shop-input__field_small"
                            onChange={(event) => setMaxInput(event)}
                            onKeyPress={(event) => setMaxInputKey(event)}
                            required
                        />
                        <label className="input__label_small shop-input__label">
                            до {maxPrice}₽
                        </label>
                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 39 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={clearMaxInput}
                            className={`shop-filters-input-clear ${
                                stateRange.value[1] === maxPrice
                                    ? "shop-filters-input-clear__hidden"
                                    : ""
                            }`}
                        >
                            <line
                                x1="2.70711"
                                y1="1.29289"
                                x2="38.0624"
                                y2="36.6482"
                                stroke="black"
                                strokeWidth="2"
                            />
                            <line
                                x1="1.29289"
                                y1="36.6482"
                                x2="36.6482"
                                y2="1.2929"
                                stroke="black"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                </div>

                <ShopPriceRange
                    stateRange={stateRange}
                    setInput={setInput}
                    postStateInput={postStateInput}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                />

                <div className="shop-filters-range-span">
                    <span className="shop-filters-range__span">
                        {minPrice}₽
                    </span>
                    <span className="shop-filters-range__span">
                        {Math.floor(maxPrice / 2)}₽
                    </span>
                    <span className="shop-filters-range__span">
                        {maxPrice}₽
                    </span>
                </div>
            </div>
        </div>
    );
});

export default ShopPrice;
