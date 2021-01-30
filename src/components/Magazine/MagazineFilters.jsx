import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setPostsFilters} from "../.././redux/actions/posts";

const MagazineFilters = React.memo(() => {
    const dispatch = useDispatch();

    const {postsType, filters} = useSelector(({posts}) => posts);
    const teachers = useSelector(({teacher}) => teacher.items);
    const {size, color} = useSelector(({visually}) => visually);

    const clickType = (type) => {
        filters.type = type;

        dispatch(setPostsFilters(filters));
    };

    const clickAddAuth = (authId) => {
        if (filters.auth[authId]) {
            delete filters.auth[authId];
        } else {
            filters.auth[authId] = authId;
        }

        dispatch(setPostsFilters(filters));
    };

    return (
        <div className="magazine-filters">
            <div className="magazine-filters-block">
                <div className="magazine-filters-types">
                    <button
                        className={
                            filters.type === ""
                                ? `magazine-filters__btn ${size} magazine-filters__btn_active`
                                : `magazine-filters__btn ${size}`
                        }
                        onClick={() => clickType("")}
                        style={{
                            color: color === "#fff" ? color : "",
                            border:
                                color === "#fff" ? `1px solid ${color}` : "",
                        }}
                    >
                        Все направления
                    </button>
                    {Object.keys(postsType).map((key) => (
                        <button
                            className={
                                filters.type === postsType[key].key
                                    ? `magazine-filters__btn ${size} magazine-filters__btn_active`
                                    : `magazine-filters__btn ${size}`
                            }
                            key={`${postsType[key].title}_${postsType[key].id}`}
                            onClick={() => clickType(postsType[key].key)}
                            style={{
                                color: color === "#fff" ? color : "",
                                border:
                                    color === "#fff"
                                        ? `1px solid ${color}`
                                        : "",
                            }}
                        >
                            {postsType[key].title}
                        </button>
                    ))}
                </div>
            </div>

            <div className="magazine-filters-block">
                <h3 className={`magazine-filters__title ${size}`}>Авторы</h3>
                {Object.keys(teachers).map((key, index) => (
                    <div
                        className="checkbox-wrapper magazine-filters-checkbox"
                        key={`${teachers[key].name}_${index}`}
                    >
                        <input
                            type="checkbox"
                            id={`checkbox-magazine${teachers[key].id}`}
                            onChange={() => clickAddAuth(teachers[key].id)}
                            className="checkbox"
                            checked={
                                teachers[key].id ===
                                filters.auth[teachers[key].id]
                                    ? true
                                    : false
                            }
                        />
                        <label
                            htmlFor={`checkbox-magazine${teachers[key].id}`}
                            className={`checkbox-label ${size}`}
                        >
                            {teachers[key].name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default MagazineFilters;
