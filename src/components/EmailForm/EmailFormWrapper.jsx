import React from "react";
import axios from "axios";

import EmailForm from "./EmailForm";

import {API_DOMEN} from "../.././api";

const EmailFormWrapper = React.memo(() => {
    const [stateForm, setStateForm] = React.useState(false);

    const onSubmit = (formData) => {
        axios
            .post(`${API_DOMEN}/subscribe/mailing`, formData)
            .then((response) => {
                setStateForm(true);
            });
	};
	
    return (
        <>
            <EmailForm onSubmit={onSubmit} stateForm={stateForm} />
        </>
    );
});

export default EmailFormWrapper;
