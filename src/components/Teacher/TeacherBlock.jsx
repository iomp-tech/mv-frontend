import React from "react";

const TeacherBlock = React.memo(({name, type, avatar, onClick}) => {
    return (
        <div className="teacher-block" onClick={onClick}>
            <div className="teacher-block-left-top"></div>
            <div className="teacher-block-text">
                <h3 className="teacher-block__title">{name}</h3>
                <p className="teacher-block__subtitle">{type}</p>
            </div>
            <div className="teacher-block-img">
                <img src={avatar} alt={name} className="teacher-block__img" />
            </div>
        </div>
    );
});

export default TeacherBlock;
