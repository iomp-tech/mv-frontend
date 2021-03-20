import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import queryString from "query-string";
import {Helmet} from "react-helmet";

import {
    fetchPostsType,
    fetchPosts,
    fetchLimitPosts,
} from ".././redux/actions/posts";
import {fetchCategories} from ".././redux/actions/categories";
import {fetchTeacher} from ".././redux/actions/teacher";

import {
    MagazineCatalog,
    MagazineCategory,
    MagazineType,
    MagazineCatalogLoading,
    MagazineFilters,
} from ".././components/";

const Magazine = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {items, isLoaded, postsType, filters} = useSelector(
        ({posts}) => posts
    );
    const teachers = useSelector(({teacher}) => teacher.items);
    const categories = useSelector(({categories}) => categories.items);
    const {size} = useSelector(({visually}) => visually);
    const {integration} = useSelector(({integration_page}) => integration_page);

    const cat = props.match.params.cat;
    const queryGet = props.location.search;

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (cat) {
            filters.cat = cat;
        } else if (filters.cat !== "") {
            filters.cat = filters.cat;
        } else {
            filters.cat = "";
        }

        const parseQuery = queryString.parse(queryGet, {
            arrayFormat: "comma",
        });

        if (parseQuery.type !== undefined) {
            filters.type = parseQuery.type;
        }

        if (parseQuery.auth !== undefined) {
            if (typeof parseQuery.auth === "object") {
                parseQuery.auth.map(
                    (arr) => (filters.auth[parseInt(arr)] = parseInt(arr))
                );
            } else {
                filters.auth[parseInt(parseQuery.auth)] = parseInt(
                    parseQuery.auth
                );
            }
        }

        if (!Object.keys(teachers).length) {
            dispatch(fetchTeacher());
        }

        if (!Object.keys(postsType).length) {
            dispatch(fetchPostsType());
        }

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }
    }, []);

    React.useEffect(() => {
        const authArr = [];

        Object.keys(filters.auth).map((arr) => {
            authArr.push(filters.auth[arr]);
        });

        const query = queryString.stringify(
            {
                type: filters.type,
                auth: authArr,
            },
            {arrayFormat: "comma", skipNull: true, skipEmptyString: true}
        );

        history.push(
            `/magazine${filters.cat !== "" ? `/${filters.cat}` : ""}/?${query}`
        );

        if (!Object.keys(items).length) {
            dispatch(fetchPosts(filters.cat, query));
        } else {
            dispatch(fetchLimitPosts(filters.cat, query));
        }
    }, [filters.cat, filters.type, Object.keys(filters.auth).length]);

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                integration.magazineTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                integration.magazineTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                integration.magazineBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                integration.magazineBottomHtml;
        }
    }, [Object.keys(integration).length]);

    return (
        <>
            <Helmet>
                <title>Журнал - IOMP</title>
            </Helmet>
            <section className="magazine">
                <div className="container">
                    <div className="magazine-wrapper">
                        <h2 className={`title ${size} magazine__title`}>
                            Журнал
                        </h2>

                        <MagazineCategory filters={filters} />

                        <div className="magazine-bottom">
                            <MagazineFilters />

                            <div className="magazine-catalog">
                                {isLoaded ? (
                                    <>
                                        {filters.type !== "" ? (
                                            <MagazineType />
                                        ) : (
                                            <MagazineCatalog />
                                        )}
                                    </>
                                ) : (
                                    <MagazineCatalogLoading />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Magazine;
