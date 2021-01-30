import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

import {setGoodsFilters} from "../../.././redux/actions/goods";

const ShopCategories = React.memo(() => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({goods}) => goods);
    const categories = useSelector(({categories}) => categories.items);

    const setGoodsCategory = (key) => {
        if (filters.categories[key]) {
            delete filters.categories[key];
        } else {
            filters.categories[key] = key;
        }

        dispatch(setGoodsFilters(filters));
    };

    return (
        <div className="shop-filters-block-wrapper">
            <div className="shop-filters-block">
                <h3 className="shop-filters__title">Направления</h3>

                {Object.keys(categories).map((key) => (
                    <div
                        className="checkbox-wrapper shop-filters-checkbox"
                        key={`${categories[key].title}_${categories[key].key}`}
                    >
                        <input
                            type="checkbox"
                            id={`${categories[key].title}_${categories[key].key}`}
                            onChange={() =>
                                setGoodsCategory(categories[key].key)
                            }
                            checked={
                                categories[key].key ===
                                filters.categories[categories[key].key]
                                    ? true
                                    : false
                            }
                            className="checkbox"
                        />
                        <label
                            htmlFor={`${categories[key].title}_${categories[key].key}`}
                            className="checkbox-label"
                        >
                            {categories[key].title}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default ShopCategories;
