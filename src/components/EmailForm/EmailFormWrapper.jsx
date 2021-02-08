import React from "react";
import axios from "axios";

import EmailForm from "./EmailForm";

import {API_DOMEN} from "../.././api";

const EmailFormWrapper = React.memo(() => {
    const [stateForm, setStateForm] = React.useState("");

    const onSubmit = (formData) => {
        axios
            .post(`${API_DOMEN}/subscribe/mailing`, formData)
            .then(() => {
                setStateForm("Спасибо, вы успешно подписаны");
            })
            .catch(() => {
                setStateForm("Этот email уже подписан");
            });
    };

    return (
        <>
            <EmailForm onSubmit={onSubmit} stateForm={stateForm} />
        </>
    );
});

export default EmailFormWrapper;
