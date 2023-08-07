import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";

import {
    LibraryBlock,
    ShopBlockLoading,
    ShopSection,
    PreloaderPage,
    NoConfirmed,
    LibraryNull,
} from ".././components/";

import {fetchUserCourse} from ".././redux/actions/user";

import {DOMEN} from ".././api";

const Library = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {course, isLoadedCourse, isLogin, user} = useSelector(
        ({user}) => user
    );
    const {integration} = useSelector(({integration_page}) => integration_page);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(course).length) {
            dispatch(fetchUserCourse());
        }
    }, []);

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                integration.libraryTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                integration.libraryTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                integration.libraryBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                integration.libraryBottomHtml;
        }
    }, [Object.keys(integration).length]);

    return (
        <>
            <Helmet>
                <title>Мои курсы - MASTER Vision</title>
            </Helmet>

            {isLoadedCourse ? (
                isLogin ? (
                    <>
                        {user.confirmed ? (
                            <section className="library">
                                <div className="container">
                                    <div className="library-wrapper">
                                        <div className="library-block-top">
                                            <h2
                                                className={`title library__title`}
                                            >
                                                Мои курсы
                                            </h2>
                                            <span
                                                className={`library__subtitle`}
                                            >
                                                {course ? course.length : 0}
                                            </span>
                                        </div>

                                        {isLoadedCourse
                                            ? course &&
                                              (course.length ? (
                                                  course.map((arr) => (
                                                      <LibraryBlock
                                                          key={`id-training-${arr.id_training}`}
                                                          DOMEN={DOMEN}
                                                          {...arr}
                                                      />
                                                  ))
                                              ) : (
                                                  <LibraryNull />
                                              ))
                                            : Array(3)
                                                  .fill(0)
                                                  .map((_, index) => (
                                                      <ShopBlockLoading
                                                          key={index}
                                                      />
                                                  ))}

                                        <Link
                                            to="/shop"
                                            className="library-block-plus"
                                        >
                                            <svg
                                                width="50"
                                                height="50"
                                                viewBox="0 0 50 50"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line
                                                    x1="25.5"
                                                    y1="2.18557e-08"
                                                    x2="25.5"
                                                    y2="50"
                                                />
                                                <line
                                                    y1="24.5"
                                                    x2="50"
                                                    y2="24.5"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        ) : (
                            <NoConfirmed />
                        )}
                    </>
                ) : (
                    history.push("/login")
                )
            ) : (
                <PreloaderPage />
            )}

            <ShopSection style={{marginBottom: "100px"}} />
        </>
    );
};

export default Library;
