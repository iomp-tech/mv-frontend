import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchUser = () => (dispatch) => {
	dispatch({
		type: 'SET_USER_LOADED',
		payload: false,
	});

	let token = localStorage.getItem('success-token');

	axios.get(`${API_DOMEN}/user/me`, {
		headers: {
			Authorization:
				`Bearer ${token}`,
		},
	}).then(({ data }) => {
		if (data.error !== undefined) {
			axios.get(`${API_DOMEN}/refresh`, {
				headers: {
					Authorization:
						`Bearer ${token}`,
				},
			}).then(({ data }) => {
				localStorage.setItem('success-token', data.token);

				window.location.reload();
			}).catch(() => {
				localStorage.removeItem('success-token');

				dispatch({
					type: 'SET_USER_LOADED',
					payload: true,
				});
			});
		} else {
			dispatch(setUser(data));
		}
	}).catch(() => {
		localStorage.removeItem('success-token');

		dispatch({
			type: 'SET_USER_LOADED',
			payload: true,
		});
	});
};

export const fetchUserInfo = () => (dispatch) => {
	let token = localStorage.getItem('success-token');

	axios.get(`${API_DOMEN}/user/me`, {
		headers: {
			Authorization:
				`Bearer ${token}`,
		},
	}).then(({ data }) => {
		dispatch(setUserInfo(data));
	});
};

export const fetchUserCourse = () => (dispatch) => {
	dispatch({
		type: 'SET_USER_LOADED_COURSE',
		payload: false,
	});

	let token = localStorage.getItem('success-token');

	axios.get(`${API_DOMEN}/user/me/course`, {
		headers: {
			Authorization:
				`Bearer ${token}`,
		},
	}).then(({ data }) => {
		dispatch(setUserCourse(data));
	});
};

const setUser = (user) => ({
	type: 'SET_USER',
	payload: user,
});

const setUserInfo = (user) => ({
	type: 'SET_USER_INFO',
	payload: user,
});

const setUserCourse = (course) => ({
	type: 'SET_USER_COURSE',
	payload: course,
});