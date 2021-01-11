const initialState = {
	isLoaded: false,
	message: "",
};

const restore = (state = initialState, action) => {
	if (action.type === 'SET_LOADED_RESTORE_EMAIL') {
		return {
			...state,
			isLoaded: action.payload
		};
	}
	if (action.type === 'SET_MESSAGE_RESTORE_EMAIL') {
		return {
			...state,
			message: action.payload
		};
	}
	if (action.type === 'SET_LOADED_RESTORE_PASS') {
		return {
			...state,
			isLoaded: action.payload
		};
	}
	if (action.type === 'SET_MESSAGE_RESTORE_PASS') {
		return {
			...state,
			message: action.payload
		};
	}
	return state;
};

export default restore;