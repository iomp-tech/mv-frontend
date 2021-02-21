import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";

const TimetableBlock = React.memo(
    ({
        id,
        category,
        title,
        range,
        minDate,
        maxDate,
        date,
        type,
        ClassTimetablePage,
        categories,
        auth,
        auths,
        timetableType,
        isLoadedLimit = true,
        color,
        size,
    }) => {
        return (
            <div
                className={`${ClassTimetablePage} timetable-block-container ${size}`}
                style={{opacity: isLoadedLimit ? "" : "0.3"}}
            >
                <Link
                    to={`/timetable/pages/${id}`}
                    className={`timetable-block ${size}`}
                    style={{color: color}}
                >
                    <div className="timetable-block-top">
                        <div className="timetable-block-type">
                            {Object.keys(categories).length ? (
                                categories[category] ? (
                                    <span
                                        className={`timetable-block__type_color ${size}`}
                                    >
                                        {categories[category].title.length > 10
                                            ? `${categories[
                                                  category
                                              ].title.substr(0, 10)}...`
                                            : categories[category].title}
                                    </span>
                                ) : null
                            ) : null}
                            {Object.keys(timetableType).length ? (
                                timetableType[type] ? (
                                    <span
                                        className={`timetable-block__type_gray ${size}`}
                                    >
                                        {timetableType[type].title.length > 10
                                            ? `${timetableType[
                                                  type
                                              ].title.substr(0, 10)}...`
                                            : timetableType[type].title}
                                    </span>
                                ) : null
                            ) : null}
                        </div>
                        <h3 className={`timetable-block__title ${size}`}>
                            {title}
                        </h3>
                        {range ? (
                            <>
                                <div className="timetable-block-date">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill={color}
                                            d="M17.4219 1.5625H15.625V0.625C15.625 0.279844 15.3452 0 15 0C14.6548 0 14.375 0.279844 14.375 0.625V1.5625H5.625V0.625C5.625 0.279844 5.3452 0 5 0C4.6548 0 4.375 0.279844 4.375 0.625V1.5625H2.57812C1.15652 1.5625 0 2.71902 0 4.14062V17.4219C0 18.8435 1.15652 20 2.57812 20H17.4219C18.8435 20 20 18.8435 20 17.4219V4.14062C20 2.71902 18.8435 1.5625 17.4219 1.5625ZM18.75 17.4219C18.75 18.1554 18.1554 18.75 17.4219 18.75H2.57812C1.84461 18.75 1.25 18.1554 1.25 17.4219V7.07031C1.25 6.96246 1.33746 6.875 1.44531 6.875H18.5547C18.6625 6.875 18.75 6.96246 18.75 7.07031V17.4219Z"
                                        />
                                    </svg>
                                    <span
                                        className={`timetable-block__date ${size}`}
                                    >
                                        <b>с:</b>{" "}
                                        {moment(minDate, "YYYY-MM-DD, HH:mm")
                                            .locale("ru")
                                            .format("DD MMMM, HH:mm")}
                                    </span>
                                </div>
                                <div className="timetable-block-date">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill={color}
                                            d="M17.4219 1.5625H15.625V0.625C15.625 0.279844 15.3452 0 15 0C14.6548 0 14.375 0.279844 14.375 0.625V1.5625H5.625V0.625C5.625 0.279844 5.3452 0 5 0C4.6548 0 4.375 0.279844 4.375 0.625V1.5625H2.57812C1.15652 1.5625 0 2.71902 0 4.14062V17.4219C0 18.8435 1.15652 20 2.57812 20H17.4219C18.8435 20 20 18.8435 20 17.4219V4.14062C20 2.71902 18.8435 1.5625 17.4219 1.5625ZM18.75 17.4219C18.75 18.1554 18.1554 18.75 17.4219 18.75H2.57812C1.84461 18.75 1.25 18.1554 1.25 17.4219V7.07031C1.25 6.96246 1.33746 6.875 1.44531 6.875H18.5547C18.6625 6.875 18.75 6.96246 18.75 7.07031V17.4219Z"
                                        />
                                    </svg>
                                    <span
                                        className={`timetable-block__date ${size}`}
                                    >
                                        <b>до:</b>{" "}
                                        {moment(maxDate, "YYYY-MM-DD, HH:mm")
                                            .locale("ru")
                                            .format("DD MMMM, HH:mm")}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <div className="timetable-block-date">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill={color}
                                        d="M17.4219 1.5625H15.625V0.625C15.625 0.279844 15.3452 0 15 0C14.6548 0 14.375 0.279844 14.375 0.625V1.5625H5.625V0.625C5.625 0.279844 5.3452 0 5 0C4.6548 0 4.375 0.279844 4.375 0.625V1.5625H2.57812C1.15652 1.5625 0 2.71902 0 4.14062V17.4219C0 18.8435 1.15652 20 2.57812 20H17.4219C18.8435 20 20 18.8435 20 17.4219V4.14062C20 2.71902 18.8435 1.5625 17.4219 1.5625ZM18.75 17.4219C18.75 18.1554 18.1554 18.75 17.4219 18.75H2.57812C1.84461 18.75 1.25 18.1554 1.25 17.4219V7.07031C1.25 6.96246 1.33746 6.875 1.44531 6.875H18.5547C18.6625 6.875 18.75 6.96246 18.75 7.07031V17.4219Z"
                                    />
                                </svg>
                                <span
                                    className={`timetable-block__date ${size}`}
                                >
                                    {moment(date, "YYYY-MM-DD, HH:mm")
                                        .locale("ru")
                                        .format("DD MMMM, HH:mm")}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="timetable-block-bottom">
                        <div className="timetable-block-auth">
                            {Object.keys(auths).length
                                ? auth.map((key) =>
                                      auths[key] ? (
                                          <div
                                              className="auth timetable-block-auth"
                                              key={`timetable-block-auth-${key}`}
                                          >
                                              <div
                                                  style={{
                                                      backgroundImage: `url(${auths[key].avatar})`,
                                                  }}
                                                  className={`auth__img ${size} timetable-block-auth__img`}
                                              ></div>
                                              <span
                                                  className={`auth__name ${size} timetable-block-auth__name`}
                                              >
                                                  {auths[key].name}
                                              </span>
                                          </div>
                                      ) : null
                                  )
                                : null}
                        </div>

                        <div className="timetable-block-btn">
                            <span
                                className={`btn-bold_color timetable-block__btn ${size}`}
                            >
                                Записаться
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
);

export default TimetableBlock;
