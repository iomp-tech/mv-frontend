const initialState = {
	isLoaded: false,
	items: [],
};

const institute = (state = initialState, action) => {
	if (action.type === 'SET_LOADED_INSTITUTE') {
		return {
			...state,
			isLoaded: action.payload
		};
	}
	if (action.type === 'SET_INSTITUTE') {
		return {
			...state,
			items: action.payload,
			isLoaded: true
		};
	}
	return state;
};

export default institute;