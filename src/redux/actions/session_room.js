import axios from "axios";
import { Base64 } from "js-base64";

import { API_DOMEN, ACTION_ROOM, URL_ROOM, KEY_ROOM } from '../.././api';

export const fetchSessionRoomCourses = () => (dispatch) => {
	axios.get(`${API_DOMEN}/courses`).then(({ data }) => {
		dispatch(setSessionRoomCourses(data));
	});
};

export const createSessionRoom = (formData) => (dispatch) => {
	const newData = {
		user: [],
		deck: "all",
		key: KEY_ROOM,
	};

	formData.users.map((key) => {
		newData.user = [
			...newData.user,
			{
				name: key.name,
				uid: key.email,
				role: key.role === "Коуч" ? 2 : 1,
			},
		];
	});

	axios
		.post(`${ACTION_ROOM}/room/create`, newData)
		.then(({ data }) => {
			const arrUser = [];

			newData.user.map((key) => {
				arrUser.push({
					url:
						URL_ROOM +
						Base64.encode(
							JSON.stringify({
								room: data.object.id,
								user: key.uid,
							})
						),
					name: key.name,
				});
			});

			dispatch(setUrlUserSessionRoom(arrUser));
		})
		.catch(({ response }) => {
			if (response.data.object.code === 4) {
				dispatch(setErrorSessionRoom("Email не может быть одинкавым"));

				setTimeout(() => {
					dispatch(setErrorOpacitySessionRoom(true));
				}, 5000);

				setTimeout(() => {
					dispatch(setErrorSessionRoom(""));
					dispatch(setErrorOpacitySessionRoom(false));
				}, 5400);
			}
		});
};

export const setSessionRoomCourses = (items) => ({
	type: 'SET_SESSION_ROOM_COURSES',
	payload: items,
});

export const setOpenSessionRoomCourses = (state) => ({
	type: 'SET_OPEN_SESSION_ROOM_COURSES',
	payload: state,
});

export const setUrlUserSessionRoom = (items) => ({
	type: 'SET_URL_USER_SESSION_ROOM',
	payload: items,
});

export const setErrorSessionRoom = (message) => ({
	type: 'SET_ERROR_SESSION_ROOM',
	payload: message,
});
export const setErrorOpacitySessionRoom = (state) => ({
	type: 'SET_ERROR_OPACITY_SESSION_ROOM',
	payload: state,
});