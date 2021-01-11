const initialState = {
	isLoaded: false,
	message: "",
};

const repeat = (state = initialState, action) => {
	if (action.type === 'SET_LOADED_REPEAT') {
		return {
			...state,
			isLoaded: action.payload
		};
	}
	if (action.type === 'SET_MESSAGE_REPEAT') {
		return {
			...state,
			message: action.payload
		};
	}
	return state;
};

export default repeat;