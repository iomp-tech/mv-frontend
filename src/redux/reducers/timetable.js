import moment from "moment";

const initialState = {
	items: {},
	itemOne: {},
	timetableType: {},
	filters: {
		type: {},
		cat: "",
	},
	limit: 8,
	itemsLength: 0,
	isLoaded: false,
	isLoadedLimit: true,
};

const timetable = (state = initialState, action) => {
	if (action.type === 'SET_TIMETABLE') {
		const newItems = {};

		const sortItmes = action.payload.data.sort((a, b) => moment(a.date, "DD.MM.YYYY, HH:mm") -
			moment(b.date, "DD.MM.YYYY, HH:mm"));

		sortItmes.map(obj => (
			newItems[obj.id] = obj
		));
		
		return {
			...state,
			items: newItems,
			itemsLength: action.payload.headers["x-total-count"],
			isLoaded: true
		};
	}
	if (action.type === 'SET_LIMIT_TIMETABLE') {
		const newItems = {};

		const sortItmes = action.payload.data.sort((a, b) => moment(a.date, "DD.MM.YYYY, HH:mm") -
			moment(b.date, "DD.MM.YYYY, HH:mm"));

		sortItmes.map(obj => (
			newItems[obj.id] = obj
		));

		return {
			...state,
			items: newItems,
			itemsLength: action.payload.headers["x-total-count"],
			isLoadedLimit: true
		};
	}
	if (action.type === 'SET_BY_ID_TIMETABLE') {
		return {
			...state,
			itemOne: action.payload,
			isLoaded: true
		};
	}
	if (action.type === 'SET_TIMETABLE_TYPE') {
		const newItems = {};

		action.payload.map(obj => (
			newItems[obj.key] = obj
		));

		return {
			...state,
			timetableType: newItems,
		};
	}
	if (action.type === 'SET_LOADED_TIMETABLE') {
		return {
			...state,
			isLoaded: action.payload,
		};
	}
	if (action.type === 'SET_LIMIT_LOADED_TIMETABLE') {
		return {
			...state,
			isLoadedLimit: action.payload,
		};
	}
	if (action.type === 'SET_TIMETABLE_FILTERS') {
		return {
			...state,
			filters: action.payload,
		};
	}
	if (action.type === 'PLUS_TIMETABLE_LIMIT') {
		return {
			...state,
			limit: parseInt(state.limit + action.payload),
		};
	}
	return state;
};

export default timetable;