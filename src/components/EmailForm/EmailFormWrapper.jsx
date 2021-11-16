import React from "react";
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

    return <>{isLoaded ? <EmailForm {...form} /> : null}</>;
});

export default EmailFormWrapper;
