const initialState = {
	items: [],
	isLoaded: false,
};

const events = (state = initialState, action) => {
	if (action.type === 'SET_EVENTS') {
		return {
			...state,
			items: action.payload,
			isLoaded: true
		};
	}
	return state;
};

export default events;