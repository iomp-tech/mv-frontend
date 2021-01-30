import React from "react";

const TeacherBlock = React.memo(({name, type, avatar, onClick, size}) => {
    return (
        <div className={`teacher-block ${size}`} onClick={onClick}>
            <div className="teacher-block-left-top"></div>
            <div className="teacher-block-text">
                <h3 className={`teacher-block__title ${size}`}>{name}</h3>
                <p className={`teacher-block__subtitle ${size}`}>{type}</p>
            </div>
            <div
                className="teacher-block-img"
                style={{backgroundImage: `url(${avatar})`}}
            ></div>
        </div>
    );
});

export default TeacherBlock;
