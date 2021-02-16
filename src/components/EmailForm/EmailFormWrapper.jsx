import React from "react";
import {useDispatch, useSelector} from "react-redux";

import EmailForm from "./EmailForm";

import {fetchEmailForm} from "../../redux/actions/emailForm";

const EmailFormWrapper = React.memo(() => {
    const dispatch = useDispatch();
    const {form, isLoaded} = useSelector(({emailForm}) => emailForm);
    const {size} = useSelector(({visually}) => visually);

    React.useEffect(() => {
        if (!Object.keys(form).length) {
            dispatch(fetchEmailForm());
        }
    }, []);

    const [errorForm, setErrorForm] = React.useState({});

    const checkInput = (e) => {
        const value = e.target.value;

        const errors = {};

        const defaultMin = 2;
        const defaultMax = 255;

        if (!value) {
            errors.email = "Поле не может быть пустым";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errors.email = "Неверный email";
        } else if (value.length > defaultMax) {
            errors.email = `Не более ${defaultMax} символов`;
        } else if (value.length < defaultMin) {
            errors.email = `Не менее ${defaultMin} символов`;
        }

        setErrorForm({
            email: errors.email,
            confirmation: errorForm.confirmation,
        });
    };

    const checkBox = (e) => {
        const value = e.target.checked;

        const errors = {};

        if (!value) {
            errors.confirmation = "Поставьте галочку";
        }

        setErrorForm({
            confirmation: errors.confirmation,
            email: errorForm.email,
        });
    };

    return (
        <>
            <EmailForm
                size={size}
                isLoaded={isLoaded}
                checkInput={checkInput}
                checkBox={checkBox}
                errorForm={errorForm}
                {...form}
            />
        </>
    );
});

export default EmailFormWrapper;
