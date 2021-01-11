const initialState = {
	messageAvatar: "",
	messagePassword: "",
	isLoaded: false,
};

const cabinet = (state = initialState, action) => {
	if (action.type === 'SET_CABINET_MESSAGE_AVATAR') {
		return {
			...state,
			messageAvatar: action.payload,
			isLoaded: true,
		};
	}
	if (action.type === 'SET_CABINET_MESSAGE_PASSWORD') {
		return {
			...state,
			messagePassword: action.payload,
			isLoaded: true,
		};
	}
	return state;
};

export default cabinet;