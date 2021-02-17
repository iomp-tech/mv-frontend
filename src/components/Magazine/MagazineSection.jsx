import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchOldPosts, fetchPostsType} from "../.././redux/actions/posts";
import {fetchTeacher} from "../.././redux/actions/teacher";

import MagazineBlock from "./MagazineBlock";
import MagazineBlockLoading from "./MagazineBlockLoading";

const MagazineSection = () => {
    const dispatch = useDispatch();

    const categories = useSelector(({categories}) => categories.items);
    const teachers = useSelector(({teacher}) => teacher.items);
    const {oldItems, postsAuth, isLoaded, postsType} = useSelector(
        ({posts}) => posts
    );
    const {color, size} = useSelector(({visually}) => visually);

    const items = useSelector(({posts}) => posts.oldItems);

    React.useEffect(() => {
        dispatch(fetchOldPosts(2));

        if (!Object.keys(teachers).length && isLoaded) {
            dispatch(fetchTeacher());
        }

        dispatch(fetchPostsType());
    }, []);

    return (
        <>
            {Object.keys(items).length ? (
                <section className="magazine">
                    <div className="container">
                        <div className="magazine-wrapper">
                            <h2 className={`title ${size} magazine__title`}>
                                Журнал
                            </h2>

                            <div className="magazine-block-wrapper">
                                {isLoaded
                                    ? Object.keys(items).map((key) => (
                                          <MagazineBlock
                                              key={`magazine-block-${items[key].id}`}
                                              {...items[key]}
                                              auths={teachers}
                                              color={color}
                                              size={size}
                                              categories={
                                                  categories[
                                                      items[key].category
                                                  ]
                                              }
                                              postsType={
                                                  postsType[items[key].type]
                                              }
                                          />
                                      ))
                                    : Array(2)
                                          .fill(0)
                                          .map((_, index) => (
                                              <div
                                                  className="magazine-block"
                                                  key={index}
                                              >
                                                  <MagazineBlockLoading />
                                              </div>
                                          ))}
                            </div>

                            <div className="magazine-btn-wrapper">
                                <Link
                                    to="/magazine"
                                    className={`btn-bold_gray magazine__btn ${size}`}
                                >
                                    Показать еще
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default MagazineSection;
