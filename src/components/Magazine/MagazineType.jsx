import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {plusPostsLimit} from "../.././redux/actions/posts";

import MagazineBlock from "./MagazineBlock";
import NoSearch from "../All/NoSearch";

const MagazineType = React.memo(() => {
    const dispatch = useDispatch();

    const {items, isLoadedLimit, postsType, filters, limit} = useSelector(
        ({posts}) => posts
    );
    const categories = useSelector(({categories}) => categories.items);
    const teachers = useSelector(({teacher}) => teacher.items);

    const onClickPlusLimit = () => {
        dispatch(plusPostsLimit(5));
    };

    return (
        <>
            {filters.type && (
                <>
                    {Object.keys(items).length ? (
                        <div
                            className="magazine-catalog-item-wrapper"
                            style={{opacity: isLoadedLimit ? "" : "0.3"}}
                        >
                            <div className="magazine-catalog-top">
                                <div className="magazine-catalog-top-left">
                                    <h4
                                        className={`magazine-catalog__title`}
                                    >
                                        {Object.keys(postsType).length
                                            ? postsType[filters.type].title
                                            : null}
                                    </h4>
                                </div>
                                <div className="magazine-catalog-top-right">
                                    <p
                                        className={`magazine-catalog__number`}
                                    >
                                        Всего:{" "}
                                        <span>{Object.keys(items).length}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="magazine-catalog-middle">
                                {Object.keys(items)
                                    .slice(0, limit)
                                    .map((key, num) => (
                                        <MagazineBlock
                                            key={items[key].id}
                                            num={num}
                                            auths={teachers}
                                            postsType={
                                                postsType[items[key].type]
                                            }
                                            categories={
                                                categories[items[key].category]
                                            }
                                            {...items[key]}
                                        />
                                    ))}
                            </div>
                            {Object.keys(items).length > limit ? (
                                <div className="magazine-catalog-bottom">
                                    <button
                                        onClick={onClickPlusLimit}
                                        className={`btn-bold_gray_icon rotate magazine-catalog__btn`}
                                    >
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 444 478"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M392.533 0C383.107 0 375.466 7.641 375.466 17.067V79.411C287.6 -5.656 147.411 -3.386 62.3444 84.479C22.2544 125.888 -0.110589 181.297 0.00041121 238.933C0.00041121 248.359 7.64141 256 17.0674 256C26.4934 256 34.1334 248.359 34.1334 238.933C34.1544 135.251 118.221 51.216 221.904 51.237C274.561 51.247 324.792 73.372 360.346 112.213L284.741 137.42C275.787 140.399 270.942 150.072 273.921 159.026C276.9 167.98 286.573 172.825 295.527 169.846L397.927 135.713C404.917 133.385 409.624 126.833 409.601 119.466V17.066C409.6 7.641 401.959 0 392.533 0Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M426.666 221.867C417.24 221.867 409.599 229.508 409.599 238.934C409.578 342.616 325.511 426.651 221.828 426.63C169.171 426.62 118.94 404.495 83.3864 365.654L158.991 340.447C167.945 337.468 172.79 327.795 169.811 318.841C166.832 309.887 157.159 305.042 148.205 308.021L45.8054 342.154C38.8154 344.482 34.1084 351.034 34.1314 358.401V460.801C34.1314 470.227 41.7724 477.868 51.1984 477.868C60.6244 477.868 68.2654 470.227 68.2654 460.801V398.456C156.131 483.523 296.321 481.254 381.387 393.388C421.477 351.979 443.842 296.57 443.731 238.934C443.733 229.508 436.092 221.867 426.666 221.867Z"
                                                fill="black"
                                            />
                                        </svg>
                                        Загрузить еще
                                    </button>
                                </div>
                            ) : null}
                        </div>
                    ) : (
                        <NoSearch
                            style={{marginTop: "0px", marginBottom: "100px"}}
                        />
                    )}
                </>
            )}
        </>
    );
});

export default MagazineType;
