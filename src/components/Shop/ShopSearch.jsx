import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setGoodsFilters} from "../.././redux/actions/goods";

const ShopSearch = React.memo(() => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({goods}) => goods);
    const [searchState, setSearchStateStr] = React.useState("");

    React.useEffect(() => {
        if (filters.search !== "") {
            setSearchStateStr(filters.search);
        }
    }, [filters.search]);

    const setSearchKey = (event) => {
        if (event.key === "Enter") {
			setSearchStateStr(event.target.value);
			
			filters.search = event.target.value;

            dispatch(setGoodsFilters(filters));
        }
    };

    const setSearchState = (event) => {
        setSearchStateStr(event.target.value);
    };

    const clearSearch = () => {
		setSearchStateStr("");
		
		filters.search = "";
        dispatch(setGoodsFilters(filters));
    };

    return (
        <div className="input shop-input">
            <input
                type="text"
                className="input__field shop-input__field"
                value={searchState}
                onChange={(event) => setSearchState(event)}
                onKeyPress={(event) => setSearchKey(event)}
                required
            />
            <label className="input__label shop-input__label">
                <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.827 18.9843L14.9656 14.1229C16.2697 12.6236 17.0592 10.6676 17.0592 8.52961C17.0592 3.82346 13.2313 0 8.52961 0C3.82346 0 0 3.8279 0 8.52961C0 13.2313 3.8279 17.0592 8.52961 17.0592C10.6676 17.0592 12.6236 16.2697 14.1229 14.9656L18.9843 19.827C19.0996 19.9423 19.2548 20.0044 19.4056 20.0044C19.5564 20.0044 19.7117 19.9468 19.827 19.827C20.0577 19.5964 20.0577 19.2149 19.827 18.9843ZM1.19317 8.52961C1.19317 4.48437 4.48436 1.1976 8.52517 1.1976C12.5704 1.1976 15.8572 4.4888 15.8572 8.52961C15.8572 12.5704 12.5704 15.866 8.52517 15.866C4.48436 15.866 1.19317 12.5749 1.19317 8.52961Z"
                        fill="#CCCCCC"
                    />
                </svg>
                Поиск
            </label>
            <svg
                width="20"
                height="20"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={clearSearch}
                className={`shop-filters-input-clear ${
                    searchState === "" ? "shop-filters-input-clear__hidden" : ""
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
    );
});

export default ShopSearch;
