import React from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import EmailForm from "./EmailForm";

import {fetchEmailForm} from "../../redux/actions/emailForm";

const EmailFormWrapper = React.memo(() => {
    const dispatch = useDispatch();
    const {form, isLoaded} = useSelector(({emailForm}) => emailForm);

    React.useEffect(() => {
        if (!Object.keys(form).length) {
            dispatch(fetchEmailForm());
        }
    }, []);

    const onSubmit = (formData) => {
        const newData = {
            Contact: {
                email: formData.email,
                id_newsletter: form.id_awo,
                id_advertising_channel_page: 0,
            },
            required_fields: {
                email: 1,
            },
            formId: form.formId,
            formVc: form.formVc,
            _aid: "",
            _vcaid: "",
        };

        axios
            .post(form.action, newData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                window.location.href = form.action;
            })
            .catch(() => {
                return false;
            });
	};
	
    return (
        <>
            <EmailForm isLoaded={isLoaded} onSubmit={onSubmit} />
        </>
    );
});

export default EmailFormWrapper;
