const initialState = {
	items: [],
	isLoaded: false,
	isOpen: false,
	urlUser: [],
	error: "",
	errorOpacity: false,
};

const session_room = (state = initialState, action) => {
	if (action.type === 'SET_SESSION_ROOM_COURSES') {
		return {
			...state,
			items: action.payload[0].id_awo_courses,
			isLoaded: true
		};
	}
	if (action.type === 'SET_OPEN_SESSION_ROOM_COURSES') {
		return {
			...state,
			isOpen: action.payload
		};
	}
	if (action.type === 'SET_URL_USER_SESSION_ROOM') {
		return {
			...state,
			urlUser: action.payload
		};
	}
	if (action.type === 'SET_ERROR_SESSION_ROOM') {
		return {
			...state,
			error: action.payload
		};
	}
	if (action.type === 'SET_ERROR_OPACITY_SESSION_ROOM') {
		return {
			...state,
			errorOpacity: action.payload
		};
	}
	return state;
};

export default session_room;