const initialState = {
	form: [],
	isLoaded: false,
};

const emailForm = (state = initialState, action) => {
	if (action.type === 'SET_EMAIL_FORM') {
		return {
			...state,
			form: action.payload[0],
			isLoaded: true
		};
	}
	return state;
};

export default emailForm;