const initialState = {
	items: {},
	oldItems: {},
	oneItem: {},
	nextOneItem: {},
	postsType: {},
	filters: {
		cat: "",
		type: "",
		auth: {},
	},
	limit: 5,
	isLoaded: false,
	isLoadedLimit: true,
};

const posts = (state = initialState, action) => {
	if (action.type === 'SET_POSTS') {
		const newItems = {};
		action.payload.map(obj => (
			newItems[`post-${obj.id}`] = obj
		));

		return {
			...state,
			items: newItems,
			isLoaded: true,
		};
	}
	if (action.type === 'SET_LIMIT_POSTS') {
		const newItems = {};

		action.payload.map(obj => (
			newItems[`post-${obj.id}`] = obj
		));

		return {
			...state,
			items: newItems,
			isLoadedLimit: true,
		};
	}
	if (action.type === 'SET_OLD_POSTS') {
		const newItems = {};

		action.payload.map(obj => (
			newItems[`post-${obj.id}`] = obj
		));

		return {
			...state,
			oldItems: newItems,
			isLoaded: true,
		};
	}

	if (action.type === 'SET_POST_BY_ID') {
		return {
			...state,
			oneItem: action.payload,
			isLoaded: true,
		};
	}

	if (action.type === 'SET_POST_NEXT_BY_ID') {
		return {
			...state,
			nextOneItem: action.payload,
			isLoaded: true,
		};
	}

	if (action.type === 'SET_POSTS_TYPE') {
		const newItems = {};

		action.payload.map(obj => (
			newItems[obj.key] = obj
		));

		return {
			...state,
			postsType: newItems,
		};

	}

	if (action.type === 'SET_POSTS_FILTERS') {
		return {
			...state,
			filters: action.payload
		};
	}

	if (action.type === 'SET_LOADED_POSTS') {
		return {
			...state,
			isLoaded: action.payload,
		};
	}
	if (action.type === 'SET_LIMIT_LOADED_POSTS') {
		return {
			...state,
			isLoadedLimit: action.payload,
		};
	}
	if (action.type === 'PLUS_POSTS_LIMIT') {
		return {
			...state,
			limit: parseInt(state.limit + action.payload),
		};
	}
	return state;
};

export default posts;