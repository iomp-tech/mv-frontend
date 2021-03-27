import React from "react";

const SessionRoomErrorBlock = ({error, errorOpacity, size, rgb}) => {
    return (
        <div
            className={`session-room-block ${
                errorOpacity ? "session-room-block-close" : ""
            } session-room-link-block`}
            style={{boxShadow: `0 0 10px rgba(${rgb}, 0.1)`}}
        >
            <h4 className={`session-room-error-block__title ${size}`}>
                Предупреждение
            </h4>
            <div className={`session-room-error-block-item ${size}`}>
                <span className="session-room-error-block-item__span">
                    {error}
                </span>
            </div>
        </div>
    );
};

export default SessionRoomErrorBlock;
