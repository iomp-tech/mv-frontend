import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setGoodsFilters} from "../../../redux/actions/goods";

const ShopTime = React.memo(() => {
	const dispatch = useDispatch();

    const {filters, times} = useSelector(({goods}) => goods);

    const setGoodsTime = (key) => {
        if (filters.time[key]) {
            delete filters.time[key];
        } else {
            filters.time[key] = key;
        }

        dispatch(setGoodsFilters(filters));
    };

    return (
        <div className="shop-filters-block-wrapper">
            <div className="shop-filters-block">
                <h3 className="shop-filters__title">Длительность</h3>

                {Object.keys(times).map((key) => (
                    <div
                        className="checkbox-wrapper shop-filters-checkbox"
                        key={`${times[key].title}_${times[key].key}`}
                    >
                        <input
                            type="checkbox"
                            id={`${times[key].title}_${times[key].key}`}
                            onChange={() =>
                                setGoodsTime(times[key].key)
                            }
                            checked={
                                times[key].key ===
                                filters.time[times[key].key]
                                    ? true
                                    : false
                            }
                            className="checkbox"
                        />
                        <label
                            htmlFor={`${times[key].title}_${times[key].key}`}
                            className="checkbox-label"
                        >
                            {times[key].title}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default ShopTime;
