const initialState = {
	isLoaded: false,
	message: "",
};

const login = (state = initialState, action) => {
	if (action.type === 'SET_LOADED_LOGIN') {
		return {
			...state,
			isLoaded: action.payload
		};
	}
	if (action.type === 'SET_MESSAGE_LOGIN') {
		return {
			...state,
			message: action.payload
		};
	}
	return state;
};

export default login;