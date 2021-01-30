import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setTimetableFilters} from "../.././redux/actions/timetable";

import {directions} from "../.././assets/js/directions";

import TimetableCategoriesItems from "./TimetableCategoriesItems";

const TimetableFilters = React.memo(({categories}) => {
    const dispatch = useDispatch();

    const {filters, timetableType} = useSelector(({timetable}) => timetable);
    const {size} = useSelector(({visually}) => visually);

    React.useEffect(() => {
        if (Object.keys(categories).length) {
            if (filters.cat !== "") {
                if (categories[filters.cat]) {
                    directions(
                        categories[filters.cat].id,
                        categories[filters.cat].key
                    );
                } else {
                    directions(0);
                }
            } else {
                directions(0);
            }
        }
    }, [categories]);

    const toggleDirections = React.useCallback(
        (index, key) => {
            filters.cat = key;

            dispatch(setTimetableFilters(filters));
            directions(index, key);
        },
        [directions, dispatch, filters]
    );

    const clickCheckbox = (key) => {
        if (filters.type[key]) {
            delete filters.type[key];
        } else {
            filters.type[key] = key;
        }
        dispatch(setTimetableFilters(filters));
    };

    return (
        <div className="timetable-filters">
            <div className="directions timetable-directions">
                <div className="directions-span">
                    <span
                        id="directions__span"
                        className={`directions__span ${size} directions__span_active`}
                        onClick={() => toggleDirections(0, "")}
                    >
                        Все направления
                    </span>
                    {Object.keys(categories).map((key) => (
                        <TimetableCategoriesItems
                            filters={filters}
                            keyId={categories[key].key}
                            size={size}
                            toggleDirections={toggleDirections}
                            key={`${categories[key].key}_${categories[key].id}`}
                            {...categories[key]}
                        />
                    ))}
                </div>
                <div className="directions__line"></div>
            </div>

            <div className="timetable-checkbox-block">
                {Object.keys(timetableType).map((key, index) => (
                    <div
                        className="checkbox-wrapper timetable-checkbox"
                        key={`${timetableType[key].title}_${timetableType[key].id}`}
                    >
                        <input
                            type="checkbox"
                            className={`checkbox ${size}`}
                            onChange={() =>
                                clickCheckbox(timetableType[key].key)
                            }
                            id={`checkbox-timetable${timetableType[key].id}`}
                            checked={
                                timetableType[key].key ===
                                filters.type[timetableType[key].key]
                                    ? true
                                    : false
                            }
                        />

                        <label
                            className={`checkbox-label ${size}`}
                            htmlFor={`checkbox-timetable${timetableType[key].id}`}
                        >
                            {timetableType[key].title}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default TimetableFilters;
