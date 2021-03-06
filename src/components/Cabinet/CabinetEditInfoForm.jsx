import React from "react";
import {useSelector} from "react-redux";
import {Field, reduxForm, formValueSelector} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

import {validateInfo as validate} from "./validateInfo";

import CabinetInputRender from "./CabinetInputRender";
import CabinetSelectRender from "./CabinetSelectRender";

let CabinetEditInfoForm = React.memo(
    ({
        handleSubmit,
        initialize,
        first_name,
        middle_name,
        last_name,
        // date_of_birth,
        // sex,
        // timezone,
        // phone,
        // skype,
        // vk,
        // facebook,
        invalid,
        submitting,
        pristine,
        size,
    }) => {
        const selector = formValueSelector("cabinetEditInfoForm");

        const {
            firstNameValue,
            middleNameValue,
            lastNameValue,
            // dateOfBirth,
            // sexValue,
            // timezoneValue,
            // phoneValue,
            // skypeValue,
            // vkValue,
            // facebookValue,
        } = useSelector((state) => {
            const {
                first_name,
                middle_name,
                last_name,
                // date_of_birth,
                // sex,
                // timezone,
                // phone,
                // skype,
                // vk,
                // facebook,
            } = selector(
                state,
                "first_name",
                "middle_name",
                "last_name"
                // "date_of_birth",
                // "sex",
                // "timezone",
                // "phone",
                // "skype",
                // "vk",
                // "facebook"
            );
            return {
                firstNameValue: first_name,
                middleNameValue: middle_name,
                lastNameValue: last_name,
                // dateOfBirth: date_of_birth,
                // sexValue: sex,
                // timezoneValue: timezone,
                // phoneValue: phone,
                // skypeValue: skype,
                // vkValue: vk,
                // facebookValue: facebook,
            };
        });

        React.useEffect(() => {
            initialize({
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
                // date_of_birth: date_of_birth,
                // sex: sex,
                // timezone: timezone,
                // phone: phone,
                // skype: skype,
                // vk: vk,
                // facebook: facebook,
            });
        }, [
            first_name,
            middle_name,
            last_name,
            // date_of_birth,
            // sex,
            // timezone,
            // phone,
            // skype,
            // vk,
            // facebook,
        ]);

        const timezoneList = [
            "UTC+2 - ?????????????????????????????? ??????????????",
            "UTC+3 - ????????????",
            "UTC+4 - ???????????????????? ????????????????????",
            "UTC+4 - ???????????????????????? ??????????????",
            "UTC+4 - ?????????????????? ??????????????",
            "UTC+4 - ?????????????????????? ??????????????",
            "UTC+4 - ?????????????????????? ??????????????",
            "UTC+5 - ???????????????????? ????????????????????????",
            "UTC+5 - ???????????????? ????????",
            "UTC+5 - ???????????????????? ??????????????",
            "UTC+5 - ???????????????????????? ??????????????",
            "UTC+5 - ???????????????????????? ??????????????",
            "UTC+5 - ?????????????????? ??????????????",
            "UTC+5 - ?????????????????????? ??????????????",
            "UTC+5 - ??????????-???????????????????? ???????????????????? ??????????",
            "UTC+5 - ????????",
            "UTC+5 - ??????????-???????????????? ???????????????????? ??????????",
            "UTC+6 - ???????????? ??????????????",
            "UTC+7 - ???????????????????? ??????????",
            "UTC+7 - ???????????????????? ????????",
            "UTC+7 - ???????????????????? ??????????????",
            "UTC+7 - ?????????????????? ????????",
            "UTC+7 - ???????????????????????? ????????",
            "UTC+7 - ?????????????????????? ??????????????",
            "UTC+7 - ?????????????????????????? ??????????????",
            "UTC+7 - ?????????????? ??????????????",
            "UTC+8 - ???????????????????? ??????????????",
            "UTC+8 - ?????????????????? ??????????????",
            "UTC+9 - ???????????????????? ???????? (????????????) (???????????????? ?? ?????????????????????? ????????????)",
            "UTC+9 - ?????????????????????????? ????????",
            "UTC+9 - ???????????????? ??????????????",
            "UTC+10 - ???????????????????? ???????? (????????????) (?????? ??????????????)",
            "UTC+10 - ???????????????????? ????????",
            "UTC+10 - ?????????????????????? ????????",
            "UTC+10 - ?????????????????? ???????????????????? ??????????????",
            "UTC+11 - ???????????????????? ???????? (????????????) (????????????-?????????????????? ????????????)",
            "UTC+11 - ?????????????????????? ??????????????",
            "UTC+11 - ?????????????????????? ??????????????",
            "UTC+12 - ???????????????????? ????????",
            "UTC+12 - ?????????????????? ???????????????????? ??????????",
        ];

        const phoneMask = createTextMask({
            pattern: "+7 (999) 999 99-99",
        });

        return (
            <form onSubmit={handleSubmit} className="cabinet-block">
                <h3 className={`cabinet-block__title`}>
                    ?????????????????????????? ????????????
                </h3>
                <div className={`cabinet-block-setting`}>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="name"
                            name="middle_name"
                            label="??????????????"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="name"
                            name="first_name"
                            label="??????"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="name"
                            name="last_name"
                            label="????????????????"
                            size={size}
                        />
                    </div>
                    {/* <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="date"
                            name="date_of_birth"
                            label="???????? ????????????????"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-radio">
                        <Field
                            component={CabinetSelectRender}
                            name="sex"
                            choise={["???? ??????????????", "??????????????", "??????????????"]}
                            label="??????"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-select">
                        <Field
                            component={CabinetSelectRender}
                            name="timezone"
                            choise={timezoneList}
                            label="?????????????? ????????"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="phone"
                            name="phone"
                            label="+7 (999) 999 99-99"
                            size={size}
                            {...phoneMask}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="skype"
                            name="skype"
                            label="Skype"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="vk"
                            name="vk"
                            label="??????????????????"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="facebook"
                            name="facebook"
                            label="Facebook"
                            size={size}
                        />
                    </div> */}
                </div>
                {/* ||
                            dateOfBirth !== date_of_birth ||
                            sexValue !== sex ||
                            timezoneValue !== timezone ||
                            phoneValue !== phone ||
                            skypeValue !== skype ||
                            vkValue !== vk ||
                            facebookValue !== facebook */}
                <button
                    type="submit"
                    className={`btn-bold_color cabinet-block__btn ${
                        (firstNameValue !== first_name ||
                            middleNameValue !== middle_name ||
                            lastNameValue !== last_name) &&
                        !invalid
                            ? ""
                            : "btn-bold_color_disabled"
                    }`}
                    disabled={invalid || submitting || pristine}
                >
                    ????????????????
                </button>
            </form>
        );
    }
);

CabinetEditInfoForm = reduxForm({
    form: "cabinetEditInfoForm",
    validate,
})(CabinetEditInfoForm);

export default CabinetEditInfoForm;
