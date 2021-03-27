import React from "react";
import {FieldArray, reduxForm} from "redux-form";

import {SessionRoomFormList} from ".././";

import validate from "./validate";

let SessionRoomForm = ({handleSubmit}) => {
    return (
        <form className="session-room-form" onSubmit={handleSubmit}>
            <FieldArray name="users" component={SessionRoomFormList} />
        </form>
    );
};

SessionRoomForm = reduxForm({
    form: "session_room_form",
    validate,
})(SessionRoomForm);

export default SessionRoomForm;
