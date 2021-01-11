const initialState = {
	isLoaded: false,
	message: "",
};

const register = (state = initialState, action) => {
	if (action.type === 'SET_LOADED_REGISTER') {
		return {
			...state,
			isLoaded: action.payload
		};
	}
	if (action.type === 'SET_MESSAGE_REGISTER') {
		return {
			...state,
			message: action.payload
		};
	}
	return state;
};

export default register;