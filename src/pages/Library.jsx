import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";

import {
    LibraryBlock,
    ShopBlockLoading,
    ShopSection,
    PreloaderPage,
} from ".././components/";
import {fetchUserCourse} from ".././redux/actions/user";

const Library = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {course, isLoadedCourse, isLogin} = useSelector(({user}) => user);
    const {size, color} = useSelector(({visually}) => visually);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(course).length) {
            dispatch(fetchUserCourse());
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Мои курсы - IOMP</title>
            </Helmet>

            {isLoadedCourse ? (
                isLogin ? (
                    <section className="library">
                        <div className="container">
                            <div className="library-wrapper">
                                <div className="library-block-top">
                                    <h2
                                        className={`title ${size} library__title`}
                                    >
                                        Мои курсы
                                    </h2>
                                    <span
                                        className={`library__subtitle ${size}`}
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
                                                  size={size}
                                                  color={color}
                                                  {...arr}
                                              />
                                          ))
                                      ) : (
                                          <div className="library-null">
                                              <p
                                                  className={`library-null__title ${size}`}
                                              >
                                                  К сожелению у вас нет курсов
                                              </p>
                                          </div>
                                      ))
                                    : Array(3)
                                          .fill(0)
                                          .map((_, index) => (
                                              <ShopBlockLoading key={index} />
                                          ))}

                                <Link to="/shop" className="library-block-plus">
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
                                        <line y1="24.5" x2="50" y2="24.5" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </section>
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
