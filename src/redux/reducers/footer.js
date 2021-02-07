const initialState = {
	menu: [],
	contact: [],
	social: [],
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
	if (action.type === 'SET_FOOTER_SOCIAL') {
		return {
			...state,
			social: action.payload,
			isLoaded: true
		};
	}
	return state;
};

export default footer;