import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const SessionRoomNull = () => {
    const {size} = useSelector(({visually}) => visually);

    return (
        <>
            <div className="session-room-null">
                <p className={`session-room-null__title ${size}`}>
                    К сожалению у вас нет курсов, которые открывают доступ к
                    сессионной комнате. Перейдите в магазин курсов
                </p>
            </div>
            <Link to="/shop" className="session-room-block-plus">
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="25.5" y1="2.18557e-08" x2="25.5" y2="50" />
                    <line y1="24.5" x2="50" y2="24.5" />
                </svg>
            </Link>
        </>
    );
};

export default SessionRoomNull;
