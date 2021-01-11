const validate = values => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Required';
	}
	if (!values.confirmation) {
		errors.confirmation = 'Required';
	}
	return errors;
};

export default validate;