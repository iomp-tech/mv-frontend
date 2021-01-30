import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setPostsFilters} from "../.././redux/actions/posts";

import {directions} from "../.././assets/js/directions";

import MagazineCategoryItems from "./MagazineCategoryItems";

const MagazineCategory = React.memo(({filters}) => {
    const dispatch = useDispatch();

    const categories = useSelector(({categories}) => categories.items);
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

            directions(index, key);
            dispatch(setPostsFilters(filters));
        },
        [filters]
    );
    return (
        <div className="magazine-top">
            <div className="directions">
                <div className="directions-span">
                    <span
                        id="directions__span"
                        className={`directions__span ${size} directions__span_active`}
                        onClick={() => toggleDirections(0, "")}
                    >
                        Все направления
                    </span>
                    {Object.keys(categories).map((key) => (
                        <MagazineCategoryItems
                            keyId={categories[key].key}
                            size={size}
                            key={`${categories[key].key}_${categories[key].id}`}
                            toggleDirections={toggleDirections}
                            {...categories[key]}
                        />
                    ))}
                </div>

                <div className="directions__line"></div>
            </div>
        </div>
    );
});

export default MagazineCategory;
