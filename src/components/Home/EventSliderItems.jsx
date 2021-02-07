import React from "react";
import {Link} from "react-router-dom";

import moment from "moment";
import "moment/locale/ru";

const EventSliderItems = React.memo(
    ({
        id,
        eventsType,
        auth,
        auths,
        title,
        description,
        thumb,
        date,
        categories,
        color,
        size,
        range,
        minDate,
        maxDate,
    }) => {
        return (
            <div
                className="event-item"
                style={{
                    color: color,
                }}
            >
                <div className={`event-item-text ${size}`}>
                    {categories && (
                        <span className={`event-item__type_color ${size}`}>
                            {categories.title}
                        </span>
                    )}
                    {eventsType && (
                        <span className={`event-item__type_gray ${size}`}>
                            {eventsType.title}
                        </span>
                    )}
                    <h3 className={`event-item__title ${size}`}>{title}</h3>
                    <p className={`event-item__description ${size}`}>
                        {description}
                    </p>
                    {range ? (
                        <>
                            <span className={`event-item__date-range ${size}`}>
                                <b>Дата старта:</b>
                            </span>
                            <span className={`event-item__date-range ${size}`}>
                                <b>с:</b>{" "}
                                {moment(minDate, "YYYY-MM-DDTHH:mm")
                                    .locale("ru")
                                    .format("DD MMMM, HH:mm")}
                            </span>
                            <span className={`event-item__date-range ${size}`}>
                                <b>до:</b>{" "}
                                {moment(maxDate, "YYYY-MM-DDTHH:mm")
                                    .locale("ru")
                                    .format("DD MMMM, HH:mm")}
                            </span>
                        </>
                    ) : (
                        <span className={`event-item__date ${size}`}>
                            <b>Дата старта:</b>{" "}
                            {moment(date, "YYYY-MM-DDTHH:mm")
                                .locale("ru")
                                .format("DD MMMM, HH:mm")}
                        </span>
                    )}

                    <div className="event-item-auth-wrapper">
                        {Object.keys(auths).length &&
                            auth.map((key) => (
                                <div
                                    className="auth event-item-auth"
                                    key={`event-item-auth-${key}`}
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${auths[key].avatar})`,
                                        }}
                                        className={`auth__img ${size} event-item-auth__img`}
                                    ></div>
                                    <span
                                        className={`auth__name ${size} event-item-auth__name`}
                                    >
                                        {auths[key].name}
                                    </span>
                                </div>
                            ))}
                    </div>

                    <div className="event-item-btn-wrapper">
                        <Link
                            to={`/timetable/pages/${id}`}
                            className={`btn-bold_color event-item__btn ${size}`}
                        >
                            Записаться
                        </Link>
                    </div>
                </div>
                {size !== "X1" ? null : (
                    <div className="event-item-thumb">
                        <div
                            className="event-item-img"
                            style={{
                                backgroundImage: `url(${thumb})`,
                            }}
                        ></div>
                        <div className="circle-bold event-item-circle1"></div>
                    </div>
                )}
            </div>
        );
    }
);

export default EventSliderItems;
