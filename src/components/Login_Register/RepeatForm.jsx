import React from "react";
import {Field, reduxForm} from "redux-form";
import {useSelector} from "react-redux";

import validate from "./validate";

import {BtnLoaded, RenderInput} from ".././";

let RepeatForm = React.memo(({handleSubmit, invalid, submitting, pristine, size}) => {
    const {isLoaded} = useSelector(({repeat}) => repeat);

    return (
        <form onSubmit={handleSubmit}>
            <div className="input reglog-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="email"
                    label="Email"
                    size={size}
                />
            </div>

            <button
                type="submit"
                className={`btn-bold_color reglog__btn ${size}`}
                style={{pointerEvents: `${isLoaded ? "none" : "auto"}`}}
                disabled={invalid || submitting || pristine}
            >
                {isLoaded ? <BtnLoaded /> : "Отправить"}
            </button>
        </form>
    );
});

RepeatForm = reduxForm({
    form: "repeatform",
    validate,
})(RepeatForm);

export default RepeatForm;
