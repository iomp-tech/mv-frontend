import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Field, reduxForm, formValueSelector} from "redux-form";

import {validatePassword as validate} from "./validatePassword";

import {CabinetInputRender, CabinetError} from ".././";

import {setMessageCabinetPassword} from "../.././redux/actions/cabinet";

let CabinetEditPasswordForm = React.memo(
    ({handleSubmit, invalid, submitting, pristine}) => {
        const dispatch = useDispatch();
        const selector = formValueSelector("сabinetEditPasswordForm");

        const {password2, password2_repeat, messagePassword} = useSelector(
            (state) => {
                const {password2, password2_repeat} = selector(
                    state,
                    "password2",
                    "password2_repeat"
                );
                return {
                    password2: password2,
                    password2_repeat: password2_repeat,
                    messagePassword: state.cabinet.messagePassword,
                };
            }
        );

        const [statePassowrd, setStatePassword] = React.useState({
            passwordState: false,
            password2State: false,
            password2RepeatState: false,
        });

        const removeError = () => {
            dispatch(setMessageCabinetPassword(""));
        };

        return (
            <>
                {messagePassword ? (
                    <CabinetError
                        message={messagePassword}
                        removeError={removeError}
                    />
                ) : (
                    <></>
                )}
                <form onSubmit={handleSubmit} className="cabinet-block">
                    <h3 className="cabinet-block__title">Изменение пароля</h3>
                    <div className="cabinet-block-setting">
                        <div className="cabinet-input">
                            <Field
                                component={CabinetInputRender}
                                func={setStatePassword}
                                statePassowrd={statePassowrd}
                                typeConst="password"
                                keyInput="passwordState"
                                type={
                                    statePassowrd.passwordState
                                        ? "text"
                                        : "password"
                                }
                                name="password1"
                                label="Текущий пароль"
                            />
                        </div>
                        <div className="cabinet-input cabinet-cabinet-block-setting-input">
                            <Field
                                component={CabinetInputRender}
                                func={setStatePassword}
                                statePassowrd={statePassowrd}
                                typeConst="password"
                                keyInput="password2State"
                                type={
                                    statePassowrd.password2State
                                        ? "text"
                                        : "password"
                                }
                                name="password2"
                                label="Новый пароль"
                            />
                        </div>
                        <div className="cabinet-input cabinet-cabinet-block-setting-input">
                            <Field
                                component={CabinetInputRender}
                                func={setStatePassword}
                                statePassowrd={statePassowrd}
                                typeConst="password"
                                keyInput="password2RepeatState"
                                type={
                                    statePassowrd.password2RepeatState
                                        ? "text"
                                        : "password"
                                }
                                name="password2_repeat"
                                label="Повторите новый пароль"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`btn-bold_color cabinet-block__btn ${
                            password2 === password2_repeat &&
                            password2 !== undefined &&
                            password2_repeat !== undefined &&
                            !invalid
                                ? ""
                                : "btn-bold_color_disabled"
                        }`}
                        disabled={invalid || submitting || pristine}
                    >
                        Обновить
                    </button>
                </form>
            </>
        );
    }
);

CabinetEditPasswordForm = reduxForm({
    form: "сabinetEditPasswordForm",
    validate,
})(CabinetEditPasswordForm);

export default CabinetEditPasswordForm;
