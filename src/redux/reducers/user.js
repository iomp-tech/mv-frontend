const initialState = {
	user: {},
	course: [],
	isLoaded: false,
	isLoadedCourse: false,
	isLogin: false,
};

const user = (state = initialState, action) => {
	if (action.type === 'SET_USER') {
		return {
			...state,
			user: action.payload,
			isLoaded: true,
			isLogin: true,
		};
	}
	if (action.type === 'SET_USER_INFO') {
		return {
			...state,
			user: action.payload,
		};
	}
	if (action.type === 'SET_USER_LOADED') {
		return {
			...state,
			isLoaded: action.payload
		};
	}
	if (action.type === 'SET_USER_LOADED_COURSE') {
		return {
			...state,
			isLoadedCourse: action.payload
		};
	}
	if (action.type === 'SET_USER_COURSE') {
		return {
			...state,
			course: action.payload,
			isLoadedCourse: true
		};
	}
	return state;
};

export default user;