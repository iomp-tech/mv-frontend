import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchCategories} from ".././redux/actions/categories";

import {
    fetchPostById,
    fetchPostNextById,
    fetchPostsType,
} from ".././redux/actions/posts";

import {PostItem, PreloaderPage, EmailFormWrapper} from ".././components/";
import {Er404} from ".././pages";
import {fetchTeacher} from ".././redux/actions/teacher";

const Post = (props) => {
    const dispatch = useDispatch();
    const postName = props.match.params.id;

    const categories = useSelector(({categories}) => categories.items);
    const {postsType, isLoaded} = useSelector(({posts}) => posts);
    const teachers = useSelector(({teacher}) => teacher.items);

    const item = useSelector(({posts}) => posts.oneItem);
    const nextItem = useSelector(({posts}) => posts.nextOneItem);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(teachers).length) {
            dispatch(fetchTeacher());
        }

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }

        if (!Object.keys(postsType).length) {
            dispatch(fetchPostsType());
        }
    }, []);

    React.useEffect(() => {
        dispatch(fetchPostById(postName));
    }, [postName]);

    React.useEffect(() => {
        if (Object.keys(item).length) {
            dispatch(fetchPostNextById(parseInt(item.id + 1)));
        }
    }, [item]);

    React.useEffect(() => {
        if (Object.keys(item).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(item.postPageTopJs);
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                item.postPageTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                item.postPageBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                item.postPageBottomHtml;
        }
    }, [item.postPageJs, item.postPageHtml]);

    return (
        <>
            <Helmet>
                <title>MASTER Vision</title>
            </Helmet>
            {isLoaded ? (
                <>
                    {Object.keys(item).length ? (
                        <>
                            <Helmet>
                                <title>{item.title} - MASTER Vision</title>
                            </Helmet>
                            <section className="post">
                                <div className="container">
                                    <PostItem
                                        auths={teachers}
                                        categories={categories[item.category]}
                                        postsType={postsType[item.type]}
                                        {...item}
                                    />
                                </div>
                            </section>

                            <EmailFormWrapper />

                            {Object.keys(nextItem).length ? (
                                <Link
                                    to={`/post/${nextItem.id}`}
                                    className="next-post"
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    <div className="container">
                                        <div className="next-post-wrapper">
                                            <div className="next-post-media">
                                                <div className="next-post-text">
                                                    <p
                                                        className={`next-post__subtitle`}
                                                    >
                                                        К следующей статье
                                                    </p>
                                                    <h4
                                                        className={`next-post__title`}
                                                    >
                                                        {nextItem.title}
                                                    </h4>
                                                </div>
                                                <div className="next-post-arrow">
                                                    <svg
                                                        width="120"
                                                        height="61"
                                                        viewBox="0 0 120 61"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M119.242 30.2291C119.242 30.6464 119.077 31.0469 118.782 31.3424L90.4793 59.6455C89.8547 60.2489 88.8592 60.2315 88.2559 59.6069C87.6674 58.9975 87.6674 58.0315 88.2559 57.4222L115.446 30.2292L88.2559 3.03935C87.6525 2.41476 87.6699 1.41928 88.2945 0.815926C88.9039 0.22731 89.8699 0.22731 90.4793 0.815926L118.782 29.1191C119.076 29.4136 119.241 29.8128 119.242 30.2291Z"
                                                            fill="black"
                                                        />
                                                        <path
                                                            d="M119.242 30.067C119.242 30.9303 118.129 31.6301 116.757 31.6301L2.48428 31.6301C1.1123 31.63 0 30.9303 0 30.067C0 29.2038 1.1123 28.5039 2.48428 28.5039L116.758 28.5039C118.129 28.5039 119.242 29.2038 119.242 30.067Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ) : null}
                        </>
                    ) : (
                        <Er404 />
                    )}
                </>
            ) : (
                <PreloaderPage />
            )}
        </>
    );
};

export default Post;
