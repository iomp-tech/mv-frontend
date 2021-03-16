const initialState = {
	isLoaded: false,
	integration: {},
};

const integrationPage = (state = initialState, action) => {
	if (action.type === 'SET_INTEGRATION_PAGE') {
		return {
			...state,
			integration: action.payload[0],
			isLoaded: true
		};
	}
	return state;
};

export default integrationPage;