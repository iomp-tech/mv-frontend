const initialState = {
	items: [],
	isLoaded: false,
};

const about = (state = initialState, action) => {
	if (action.type === 'SET_ABOUT') {
		return {
			...state,
			items: action.payload,
			isLoaded: true
		};
	}
	return state;
};

export default about;