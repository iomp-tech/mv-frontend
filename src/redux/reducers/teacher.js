const initialState = {
	itemsMain: {},
	items: {},
	isLoaded: false,
};

const teacher = (state = initialState, action) => {
	if (action.type === 'SET_TEACHER_MAIN') {
		const newItems = {};

		action.payload.map(obj => (
			newItems[obj.id] = obj
		));

		return {
			...state,
			itemsMain: newItems,
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
			items: newItems,
			isLoaded: true
		};
	}
	return state;
};

export default teacher;