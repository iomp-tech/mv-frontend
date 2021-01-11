const initialState = {
	items: {},
	isLoaded: false,
};

const categories = (state = initialState, action) => {
	if (action.type === 'SET_CATEGORIES') {
		const newItems = {};

		action.payload.map(obj => (
			newItems[obj.key] = obj
		));

		return {
			...state,
			items: newItems,
			isLoaded: true
		};
	}
	return state;
};

export default categories;