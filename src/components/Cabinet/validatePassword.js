export const validatePassword = (values) => {
	const errors = {}; 

	const passwordMin = 5;
	
	const defaultMin = 2;
	const defaultMax = 255;

	if (!values.password1) {
		errors.password1 = 'Поле не может быть пустым';
	} else if (/[А-Яа-яЁё]/i.test(values.password1)) {
		errors.password1 = 'Поле не может содержать кириллицу'
	} 
	else if (values.password1.length > defaultMax) {
		errors.password1 = `Не более ${defaultMax} символов`;
	} else if (values.password1.length < passwordMin) {
		errors.password1 = `Не менее ${passwordMin} символов`;
	}

	if (!values.password2) {
		errors.password2 = 'Поле не может быть пустым';
	} else if (/[А-Яа-яЁё]/i.test(values.password2)) {
		errors.password2 = 'Поле не может содержать кириллицу'
	}
	else if (values.password2.length > defaultMax) {
		errors.password2 = `Не более ${defaultMax} символов`;
	} else if (values.password2.length < passwordMin) {
		errors.password2 = `Не менее ${passwordMin} символов`;
	}

	// 
	if (!values.password2_repeat) {
		errors.password2_repeat = 'Поле не может быть пустым';
	} else if (/[А-Яа-яЁё]/i.test(values.password2_repeat)) {
		errors.password2_repeat = 'Поле не может содержать кириллицу'
	}
	else if (values.password2_repeat.length > defaultMax) {
		errors.password2_repeat = `Не более ${defaultMax} символов`;
	} else if (values.password2_repeat.length < passwordMin) {
		errors.password2_repeat = `Не менее ${passwordMin} символов`;
	} else if (values.password2 !== values.password2_repeat) {
		errors.password2_repeat = `Пароли не равны`;
	}

	return errors;
};