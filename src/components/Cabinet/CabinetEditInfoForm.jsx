import React from "react";
import {useSelector} from "react-redux";
import {Field, reduxForm, formValueSelector} from "redux-form";

import {validateInfo as validate} from "./validateInfo";

import CabinetInputRender from "./CabinetInputRender";

let CabinetEditInfoForm = React.memo(
    ({
        handleSubmit,
        initialize,
        first_name,
        last_name,
        invalid,
        submitting,
        pristine,
        size,
    }) => {
        const selector = formValueSelector("cabinetEditInfoForm");

        const {firstNameValue, lastNameValue} = useSelector((state) => {
            const {first_name, last_name} = selector(
                state,
                "first_name",
                "last_name"
            );
            return {
                firstNameValue: first_name,
                lastNameValue: last_name,
            };
        });

        React.useEffect(() => {
            initialize({first_name: first_name, last_name: last_name});
        }, [first_name, last_name]);

        return (
            <form onSubmit={handleSubmit} className="cabinet-block">
                <h3 className={`cabinet-block__title ${size}`}>
                    Редактировать данные
                </h3>
                <div className={`cabinet-block-setting ${size}`}>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="name"
                            name="first_name"
                            label="Имя"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="name"
                            name="last_name"
                            label="Фамилия"
                            size={size}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className={`btn-bold_color cabinet-block__btn ${size} ${
                        (firstNameValue !== first_name ||
                            lastNameValue !== last_name) &&
                        !invalid
                            ? ""
                            : "btn-bold_color_disabled"
                    }`}
                    disabled={invalid || submitting || pristine}
                >
                    Обновить
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
