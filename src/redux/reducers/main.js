const initialState = {
	content: [],
	isLoaded: false,
};

const main = (state = initialState, action) => {
	if (action.type === 'SET_MAIN') {
		return {
			...state,
			content: action.payload[0],
			isLoaded: true
		};
	}
	return state;
};

export default main;