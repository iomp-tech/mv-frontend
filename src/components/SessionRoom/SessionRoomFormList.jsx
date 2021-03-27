import React from "react";
import {Field} from "redux-form";

import {useSelector} from "react-redux";

import {BtnLoaded, RenderInput, RenderSelect} from ".././";

const SessionRoomFormList = ({fields}) => {
    const {size, color} = useSelector(({visually}) => visually);

    React.useEffect(() => {
        fields.push({role: "Ученик"});
    }, []);

    const plusElements = () => {
        if (fields.length < 15) {
            fields.push({role: "Ученик"});
        }
    };

    const deleteElements = (index) => {
        fields.remove(index);
    };

    const type_user = ["Ученик", "Коуч"];

    return (
        <>
            {fields.map((key, index) => (
                <div
                    className="session-room-form-block"
                    key={`session-room-form-block-${index}`}
                >
                    <div className="session-room-form-block-input">
                        <div className="input session-room-input">
                            <Field
                                component={RenderInput}
                                type="text"
                                name={`${key}.name`}
                                label="Имя"
                                size={size}
                            />
                        </div>
                        <div className="input session-room-input">
                            <Field
                                component={RenderInput}
                                type="text"
                                name={`${key}.email`}
                                label="Email (уникальный)"
                                size={size}
                            />
                        </div>
                        <div className="input session-room-select">
                            <Field
                                component={RenderSelect}
                                name={`${key}.role`}
                                choise={type_user}
                                color={color}
                                size={size}
                            />
                        </div>
                    </div>
                    {index === 0 ? null : (
                        <div
                            className="session-room-form-block-close"
                            onClick={() => deleteElements(index)}
                        >
                            <div className="session-room-close">
                                <svg
                                    width="37"
                                    height="37"
                                    viewBox="0 0 37 37"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line
                                        x1="0.646447"
                                        y1="36.2846"
                                        x2="35.6464"
                                        y2="1.28463"
                                    />
                                    <line
                                        x1="1.35355"
                                        y1="0.646447"
                                        x2="36.3536"
                                        y2="35.6464"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            <div className="session-room-form-btn">
                <button
                    className={`btn-regular_gray_icon session-room-form-btn-add ${size}`}
                    type="button"
                    onClick={plusElements}
                >
                    <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line y1="11.9292" x2="23" y2="11.9292" />
                        <line x1="12" y1="0.751221" x2="12" y2="23.7512" />
                    </svg>
                    Добавить пользователя
                </button>
                <button
                    className={`btn-bold_color session-room-form-btn-create ${size}`}
                    type="submit"
                    name="action"
                >
                    Создать
                </button>
            </div>
        </>
    );
};

export default SessionRoomFormList;
