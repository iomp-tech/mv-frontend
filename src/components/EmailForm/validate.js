const validate = values => {
	const errors = {};
	
	const defaultMin = 2;
	const defaultMax = 255;

	if (!values.email) {
		errors.email = 'Поле не может быть пустым';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Неверный email'
	} else if (values.email.length > defaultMax) {
		errors.email = `Не более ${defaultMax} символов`;
	} else if (values.email.length < defaultMin) {
		errors.email = `Не менее ${defaultMin} символов`;
	}
	if (!values.confirmation) {
		errors.confirmation = 'Required';
	}
	return errors;
};

export default validate;