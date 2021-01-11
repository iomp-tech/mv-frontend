const initialState = {
	menu: [],
	contact: [],
	isLoaded: false,
};

const footer = (state = initialState, action) => {
	if (action.type === 'SET_FOOTER_MENU') {
		return {
			...state,
			menu: action.payload,
			isLoaded: true
		};
	}
	if (action.type === 'SET_FOOTER_CONTACT') {
		return {
			...state,
			contact: action.payload[0],
			isLoaded: true
		};
	}
	return state;
};

export default footer;