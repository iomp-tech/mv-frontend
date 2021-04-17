import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {
    fetchTimetable,
    fetchTimetableType,
} from "../.././redux/actions/timetable";
import {fetchTeacher} from "../.././redux/actions/teacher";

import TimetableBlock from "./TimetableBlock";
import TimetableBlockLoading from "./TimetableBlockLoading";

const TimetableSection = () => {
    const dispatch = useDispatch();

    const categories = useSelector(({categories}) => categories.items);
    const {items, isLoaded, timetableType} = useSelector(
        ({timetable}) => timetable
    );
    const teachers = useSelector(({teacher}) => teacher.items);

    React.useEffect(() => {
        if (!Object.keys(teachers).length) {
            dispatch(fetchTeacher());
        }

        dispatch(fetchTimetable(4));

        dispatch(fetchTimetableType());
    }, []);

    return (
        <>
            {Object.keys(items).length ? (
                <section className="timetable">
                    <div className="container">
                        <div className="timetable-wrapper">
                            <h2 className={`title timetable__title`}>
                                Ближайшие программы
                            </h2>
                            <div className="timetable-block-wrapper">
                                {isLoaded
                                    ? Object.keys(items).map((key) => (
                                          <TimetableBlock
                                              categories={categories}
                                              auths={teachers}
                                              timetableType={timetableType}
                                              {...items[key]}
                                              key={`timetable-block-${items[key].id}`}
                                          />
                                      ))
                                    : Array(4)
                                          .fill(0)
                                          .map((_, index) => (
                                              <div
                                                  className="timetable-block-container"
                                                  key={`timetable-block-${index}`}
                                              >
                                                  <TimetableBlockLoading />
                                              </div>
                                          ))}
                            </div>

                            <div className="timetable-btn-wrapper">
                                <Link
                                    to="/timetable"
                                    className={`btn-bold_gray timetable__btn`}
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

export default TimetableSection;
