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
    }) => {
        return (
            <Link to={`/timetable/pages/${id}`} className="event-item">
                <div className="event-item-text">
                    {categories && (
                        <span className="event-item__type_color">
                            {categories.title}
                        </span>
                    )}
                    {eventsType && (
                        <span className="event-item__type_gray">
                            {eventsType.title}
                        </span>
                    )}
                    <h3 className="event-item__title">{title}</h3>
                    <p className="event-item__description">{description}</p>
                    <span className="event-item__date">
                        Дата старта:{" "}
                        {moment(date, "DD.MM.YYYY HH:mm")
                            .locale("ru")
                            .format("DD MMMM, HH:mm")}
                    </span>

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
                                        className="auth__img event-item-auth__img"
                                    ></div>
                                    <span className="auth__name event-item-auth__name">
                                        {auths[key].name}
                                    </span>
                                </div>
                            ))}
                    </div>

                    <div className="event-item-btn-wrapper">
                        <button className="btn-bold_color event-item__btn">
                            Записаться
                        </button>
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
            </Link>
        );
    }
);

export default EventSliderItems;
