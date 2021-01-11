import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setGoodsFilters} from "../../.././redux/actions/goods";

const ShopTeachers = React.memo(() => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({goods}) => goods);
    const teachers = useSelector(({teacher}) => teacher.items);

    const setGoodsAuth = (key) => {
        if (filters.auth[key]) {
            delete filters.auth[key];
        } else {
            filters.auth[key] = key;
        }

        dispatch(setGoodsFilters(filters));
    };

    return (
        <div className="shop-filters-block-wrapper">
            <div className="shop-filters-block">
                <h3 className="shop-filters__title">Тренера</h3>

                {Object.keys(teachers).map((key) => (
                    <div
                        className="checkbox-wrapper shop-filters-checkbox"
                        key={`${teachers[key].name}_${teachers[key].id}`}
                    >
                        <input
                            type="checkbox"
                            id={`${teachers[key].name}_${teachers[key].id}`}
                            onChange={() =>
                                setGoodsAuth(teachers[key].id)
                            }
                            checked={
                                teachers[key].id ===
                                filters.auth[teachers[key].id]
                                    ? true
                                    : false
                            }
                            className="checkbox"
                        />
                        <label
                            htmlFor={`${teachers[key].name}_${teachers[key].id}`}
                            className="checkbox-label"
                        >
                            {teachers[key].name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default ShopTeachers;
