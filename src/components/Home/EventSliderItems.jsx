import React from "react";
import {Link} from "react-router-dom";

import moment from "moment";
import "moment/locale/ru";

const EventSliderItems = React.memo(
    ({
        url,
        eventsType,
        auth,
        auths,
        title,
        description,
        thumb,
        date,
        categories,
        color,
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
                <div className={`event-item-text`}>
                    {categories && (
                        <span className={`event-item__type_color`}>
                            {categories.title}
                        </span>
                    )}
                    {eventsType && (
                        <span className={`event-item__type_gray`}>
                            {eventsType.title}
                        </span>
                    )}
                    <h3 className={`event-item__title`}>{title}</h3>
                    <p className={`event-item__description`}>{description}</p>
                    {range ? (
                        <div className="event-item-date">
                            <div className="event-item-date-left">
                                <span className={`event-item__date-range`}>
                                    <b>Дата старта:</b>
                                </span>
                            </div>
                            <div className="event-item-date-right">
                                <span className={`event-item__date-range`}>
                                    <b>с:</b>{" "}
                                    {moment(minDate, "YYYY-MM-DD, HH:mm")
                                        .locale("ru")
                                        .format("DD MMMM, HH:mm")}
                                </span>
                                <span className={`event-item__date-range`}>
                                    <b>до:</b>{" "}
                                    {moment(maxDate, "YYYY-MM-DD, HH:mm")
                                        .locale("ru")
                                        .format("DD MMMM, HH:mm")}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="event-item-date">
                            <div className="event-item-date-left">
                                <span className={`event-item__date`}>
                                    <b>Дата старта:</b>
                                </span>
                            </div>
                            <div className="event-item-date-right">
                                <span className={`event-item__date`}>
                                    {moment(date, "YYYY-MM-DD, HH:mm")
                                        .locale("ru")
                                        .format("DD MMMM, HH:mm")}
                                </span>
                            </div>
                        </div>
                    )}

                    <div className="event-item-auth-wrapper">
                        {Object.keys(auths).length &&
                            auth.map(
                                (key) =>
                                    auths[key] && (
                                        <div
                                            className="auth event-item-auth"
                                            key={`event-item-auth-${key}`}
                                        >
                                            <div
                                                style={{
                                                    backgroundImage: `url(${auths[key].avatar})`,
                                                }}
                                                className={`auth__img event-item-auth__img`}
                                            ></div>
                                            <span
                                                className={`auth__name event-item-auth__name`}
                                            >
                                                {auths[key].name}
                                            </span>
                                        </div>
                                    )
                            )}
                    </div>

                    <div className="event-item-btn-wrapper">
                        <Link
                            to={`/timetable/pages/${url}`}
                            className={`btn-bold_color event-item__btn`}
                        >
                            Записаться
                        </Link>
                    </div>
                </div>
                <div className="event-item-thumb">
                    <div
                        className="event-item-img"
                        style={{
                            backgroundImage: `url(${thumb})`,
                        }}
                    ></div>
                    <div className="circle-bold event-item-circle1"></div>
                </div>
            </div>
        );
    }
);

export default EventSliderItems;
