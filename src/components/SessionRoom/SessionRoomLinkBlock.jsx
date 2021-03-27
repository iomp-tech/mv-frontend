import React from "react";

const SessionRoomLinkBlock = ({urlUser, size, rgb}) => {
    return (
        <div className="session-room-block session-room-link-block" style={{boxShadow: `0 0 10px rgba(${rgb}, 0.1)`}}>
            <h4 className={`session-room-link-block__title ${size}`}>
                Ссылки для входа
            </h4>
            {urlUser.map((obj, index) => (
                <div
                    className={`session-room-link-block-item ${size}`}
                    key={`session-room-link-block-item-${index}`}
                >
                    <span className="session-room-link-block-item__span">
                        Ссылка для {obj.name}:
                    </span>
                    <a
                        href={obj.url}
                        target="_blank"
                        className="session-room-link-block-item__link"
                    >
                        войти
                    </a>
                </div>
            ))}
        </div>
    );
};

export default SessionRoomLinkBlock;
