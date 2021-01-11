export const validateInfo = (values) => {
	const errors = {};

	if (!values.first_name) {
		errors.first_name = 'Поле не может быть пустым';
	} else if (!/^[А-Яа-яЁё]+$/i.test(values.first_name)) {
		errors.first_name = 'Поле не может содержать спец символы';
	} else if (values.first_name.length > 255) {
		errors.first_name = 'Не более 255 символов';
	} else if (values.first_name.length < 2) {
		errors.first_name = 'Не менее 2 символов';
	}

	if (!values.last_name) {
		errors.last_name = 'Поле не может быть пустым';
	} else if (!/^[А-Яа-яЁё]+$/i.test(values.last_name)) {
		errors.last_name = 'Поле не может содержать спец символы';
	} else if (values.last_name.length > 255) {
		errors.last_name = 'Не более 255 символов';
	} else if (values.last_name.length < 2) {
		errors.last_name = 'Не менее 2 символов';
	}

	return errors;
};