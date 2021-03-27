const validate = values => {
	const errors = {};

	const defaultMin = 2;
	const defaultMax = 255;

	if (!values.users || !values.users.length) {
		errors.users = { _error: '' }
	} else {
		const usersArrayErrors = [];

		values.users.forEach((user, userIndex) => {
			const userErrors = {}

			if (!user || !user.name) {
				userErrors.name = 'Поле не может быть пустым'
				usersArrayErrors[userIndex] = userErrors
			} else if (!/^[А-Яа-яЁё]+$/i.test(user.name)) {
				userErrors.name = 'Поле не может содержать спец символы';
				usersArrayErrors[userIndex] = userErrors
			} else if (user.name.length > defaultMax) {
				userErrors.name = `Не более ${defaultMax} символов`;
				usersArrayErrors[userIndex] = userErrors
			} else if (user.name.length < defaultMin) {
				userErrors.name = `Не менее ${defaultMin} символов`;
				usersArrayErrors[userIndex] = userErrors
			}

			if (!user || !user.email) {
				userErrors.email = 'Поле не может быть пустым';
				usersArrayErrors[userIndex] = userErrors;
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
				userErrors.email = 'Неверный email'
				usersArrayErrors[userIndex] = userErrors;
			} else if (user.email.length > defaultMax) {
				userErrors.email = `Не более ${defaultMax} символов`;
				usersArrayErrors[userIndex] = userErrors;
			} else if (user.email.length < defaultMin) {
				userErrors.email = `Не менее ${defaultMin} символов`;
				usersArrayErrors[userIndex] = userErrors;
			}
		});

		if (usersArrayErrors.length) {
			errors.users = usersArrayErrors
		}
	}

	return errors;
};

export default validate;
