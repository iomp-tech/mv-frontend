import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchCategories} from ".././redux/actions/categories";
import {
    fetchByIdTimetable,
    fetchTimetableType,
} from ".././redux/actions/timetable";
import {fetchTeacher} from ".././redux/actions/teacher";

import {
    EmailFormWrapper,
    TimetableLoading,
    TimetableSubsForm,
} from ".././components";

import {Er404} from ".././pages/";

const TimetableSubs = (props) => {
    const dispatch = useDispatch();

    const categories = useSelector(({categories}) => categories.items);
    const {itemOne, isLoaded, timetableType} = useSelector(
        ({timetable}) => timetable
    );
    const teachers = useSelector(({teacher}) => teacher.items);
    const {size} = useSelector(({visually}) => visually);

    const timetableName = props.match.params.id;

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(timetableType).length) {
            dispatch(fetchTimetableType());
        }

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }

        if (!Object.keys(teachers).length) {
            dispatch(fetchTeacher());
        }
    }, []);

    React.useEffect(() => {
        dispatch(fetchByIdTimetable(timetableName));
    }, [timetableName]);

    const [errorForm, setErrorForm] = React.useState({});

    const checkInput = (e) => {
        const value = e.target.value;

        const errors = {};

        const defaultMin = 2;
        const defaultMax = 255;

        if (!value) {
            errors.email = "Поле не может быть пустым";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errors.email = "Неверный email";
        } else if (value.length > defaultMax) {
            errors.email = `Не более ${defaultMax} символов`;
        } else if (value.length < defaultMin) {
            errors.email = `Не менее ${defaultMin} символов`;
        }

        setErrorForm({
            email: errors.email,
            confirmation: errorForm.confirmation,
        });
    };

    const checkBox = (e) => {
        const value = e.target.checked;

        const errors = {};

        if (!value) {
            errors.confirmation = "Поставьте галочку";
        }

        setErrorForm({
            confirmation: errors.confirmation,
            email: errorForm.email,
        });
    };

    return (
        <div>
            {isLoaded ? (
                <div>
                    {Object.keys(itemOne).length ? (
                        <>
                            <Helmet>
                                <title>{itemOne.title} - IOMP</title>
                            </Helmet>
                            <section className="timetable-page">
                                <div className="container">
                                    <div
                                        className={`timetable-page-wrapper ${size}`}
                                    >
                                        <div
                                            className={`timetable-page-text ${size}`}
                                        >
                                            <div className="timetable-page-type">
                                                {Object.keys(categories)
                                                    .length ? (
                                                    <span
                                                        className={`timetable-page__type_color ${size}`}
                                                    >
                                                        {
                                                            categories[
                                                                itemOne.category
                                                            ].title
                                                        }
                                                    </span>
                                                ) : (
                                                    <></>
                                                )}
                                                {Object.keys(timetableType)
                                                    .length ? (
                                                    <span
                                                        className={`timetable-page__type_gray ${size}`}
                                                    >
                                                        {
                                                            timetableType[
                                                                itemOne.type
                                                            ].title
                                                        }
                                                    </span>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                            <h2
                                                className={`timetable-page__title ${size}`}
                                            >
                                                {itemOne.title}
                                            </h2>
                                            <p
                                                className={`timetable-page__description ${size}`}
                                            >
                                                {itemOne.description}
                                            </p>
                                            <div className="timetable-page-auth-wrapper">
                                                {Object.keys(teachers).length
                                                    ? itemOne.auth.map(
                                                          (key) => (
                                                              <div
                                                                  className="auth timetable-page-auth"
                                                                  key={`timetable-page-auth-${key}`}
                                                              >
                                                                  <div
                                                                      style={{
                                                                          backgroundImage: `url(${teachers[key].avatar})`,
                                                                      }}
                                                                      className={`auth__img ${size} timetable-page-auth__img`}
                                                                  ></div>
                                                                  <span
                                                                      className={`auth__name ${size} timetable-page-auth__name`}
                                                                  >
                                                                      {
                                                                          teachers[
                                                                              key
                                                                          ].name
                                                                      }
                                                                  </span>
                                                              </div>
                                                          )
                                                      )
                                                    : null}
                                            </div>
                                        </div>
                                        <TimetableSubsForm
                                            size={size}
                                            checkInput={checkInput}
                                            errorForm={errorForm}
                                            checkBox={checkBox}
                                            {...itemOne}
                                        />
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : (
                        <Er404 />
                    )}
                </div>
            ) : (
                <TimetableLoading />
            )}
            <EmailFormWrapper />
        </div>
    );
};

export default TimetableSubs;
