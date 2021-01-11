const initialState = {
	itemsMain: [],
	items: {},
	isLoaded: false,
};

const teacher = (state = initialState, action) => {
	if (action.type === 'SET_TEACHER_MAIN') {
		return {
			...state,
			itemsMain: action.payload,
			isLoaded: true
		};
	}
	if (action.type === 'SET_TEACHER') {
		const newItems = {};

		action.payload.map(obj => (
			newItems[obj.id] = obj
		));

		return {
			...state,
			items: newItems
		};
	}
	return state;
};

export default teacher;