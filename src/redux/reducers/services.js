const initialState = {
	items: [],
	isLoaded: false,
};

const services = (state = initialState, action) => {
	if (action.type === 'SET_SERVICES') {
		return {
			...state,
			items: action.payload,
			isLoaded: true
		};	
	}
	return state;
};

export default services;