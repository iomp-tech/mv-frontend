const initialState = {
	items: {},
	itemsSection: {},
	byUrlItem: {},
	times: {},
	types: {},
	filters: {
		time: {},
		auth: {},
		price: {
			min: null,
			max: null,
		},
		categories: {},
		search: "",
	},
	minPrice: "",
	maxPrice: "",
	limit: 10,
	itemsLength: 0,
	isLoaded: false,
	isLoadedLimit: true,
};

const goods = (state = initialState, action) => {
	if (action.type === 'SET_GOODS') {
		const newItems = {};

		action.payload.data.map(obj => (
			newItems[`good-${obj.id}`] = obj
		));

		return {
			...state,
			items: newItems,
			itemsLength: action.payload.headers["x-total-count"],
			isLoaded: true,
			isLoadedLimit: true,
		};
	}
	if (action.type === 'SET_LIMIT_GOODS') {
		const newItems = {};

		action.payload.data.map(obj => (
			newItems[`good-${obj.id}`] = obj
		));

		return {
			...state,
			items: newItems,
			itemsLength: action.payload.headers["x-total-count"],
			isLoadedLimit: true,
		};
	}
	if (action.type === 'SET_GOODS_SECTION') {
		const newItems = {};

		action.payload.map(obj => (
			newItems[`good-${obj.id}`] = obj
		));

		return {
			...state,
			itemsSection: newItems,
			isLoaded: true,
		};
	}
	if (action.type === 'SET_GOODS_BY_URL') {
		let newItems = {};

		if (action.payload[0]) {
			newItems = { ...action.payload[0] }
		}

		return {
			...state,
			byUrlItem: newItems,
			isLoaded: true,
		};
	}
	if (action.type === 'SET_GOODS_TIME') {
		const newItems = {};

		action.payload.map(obj => (
			newItems[obj.key] = obj
		));

		return {
			...state,
			times: newItems
		};
	}
	if (action.type === 'SET_GOODS_TYPE') {
		const newItems = {};

		action.payload.map(obj => (
			newItems[obj.key] = obj
		));

		return {
			...state,
			types: newItems
		};
	}
	if (action.type === 'SET_LOADED_GOODS') {
		return {
			...state,
			isLoaded: action.payload,
		};
	}
	if (action.type === 'SET_LIMIT_LOADED_GOODS') {
		return {
			...state,
			isLoadedLimit: action.payload,
		};
	}
	if (action.type === 'SET_GOODS_FILTERS') {
		return {
			...state,
			filters: action.payload
		};
	}
	if (action.type === 'SET_GOODS_MIN_PRICE') {
		return {
			...state,
			minPrice: parseInt(action.payload),
		};
	}
	if (action.type === 'SET_GOODS_MAX_PRICE') {
		return {
			...state,
			maxPrice: parseInt(action.payload),
		};
	}
	if (action.type === 'PLUS_GOODS_LIMIT') {
		return {
			...state,
			limit: parseInt(state.limit + action.payload),
		};
	}
	return state;
};

export default goods;