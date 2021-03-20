import React from "react";
import {Link} from "react-router-dom";

const TeacherModal = React.memo(
    ({
        state,
        onClick,
        modalRef,
        id,
        name,
        type,
        description,
        avatar,
        bgColor,
        rgb,
        buttonVisible = true,
    }) => {
        const toggleOverflow = () => {
            document.body.style.overflow = "visible";
        };

        return (
            <div
                className={
                    state
                        ? "teacher-modal-wrapper teacher-modal-wrapper_active"
                        : "teacher-modal-wrapper"
                }
                ref={modalRef}
            >
                <div
                    className={
                        state
                            ? "teacher-modal-content teacher-modal-content_active"
                            : "teacher-modal-content"
                    }
                    style={{
                        backgroundColor: bgColor,
                        boxShadow: `0 0 25px rgba(${rgb}, 0.1)`,
                    }}
                >
                    <span className="teacher-modal-close" onClick={onClick}>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 39 38"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="2.70711"
                                y1="1.29289"
                                x2="38.0624"
                                y2="36.6482"
                                strokeWidth="2"
                            />
                            <line
                                x1="1.29289"
                                y1="36.6482"
                                x2="36.6482"
                                y2="1.2929"
                                strokeWidth="2"
                            />
                        </svg>
                    </span>
                    <div className="teacher-modal-text">
                        <h4 className="teacher-modal__title">{name}</h4>
                        <p className="teacher-modal__subtitle">{type}</p>
                        <div
                            className="teacher-modal__description"
                            dangerouslySetInnerHTML={{__html: description}}
                        ></div>

                        {buttonVisible && (
                            <Link
                                to={`/shop/?auth=${id}`}
                                onClick={toggleOverflow}
                                className="btn-bold_color teacher-modal__btn"
                            >
                                Курсы с этим преподавателем
                            </Link>
                        )}
                    </div>
                    <div className="teacher-modal-thumb">
                        <img
                            src={avatar}
                            alt={name}
                            className="teacher-modal__img"
                        />
                    </div>
                </div>
            </div>
        );
    }
);

export default TeacherModal;
