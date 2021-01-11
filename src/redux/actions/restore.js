import axios from "axios";

import { API_DOMEN } from '../.././api';

export const sendRestoreEmail = (formData) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_RESTORE_EMAIL',
		payload: true,
	});

	axios
		.post(`${API_DOMEN}/restoreEmail`, formData)
		.then((response) => {
			dispatch({
				type: 'SET_LOADED_RESTORE_EMAIL',
				payload: false,
			});

			window.location.href = "/restoresuccess";
		})
		.catch((error) => {
			dispatch(setMessageRestoreEmail("Email не найден"));

			dispatch({
				type: 'SET_LOADED_RESTORE_EMAIL',
				payload: false,
			});
		});
};

export const sendRestorePass = (formData) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_RESTORE_PASS',
		payload: true,
	});

	axios
		.post(`${API_DOMEN}/restorePass`, formData)
		.then((response) => {
			dispatch({
				type: 'SET_LOADED_RESTORE_PASS',
				payload: false,
			});

			window.location.href = "/login";
		})
		.catch((error) => {
			dispatch(setMessageRestorePass("Аккаунт не найден"));

			dispatch({
				type: 'SET_LOADED_RESTORE_PASS',
				payload: false,
			});
		});
};

const setMessageRestoreEmail = (message) => ({
	type: 'SET_MESSAGE_RESTORE_EMAIL',
	payload: message,
});

const setMessageRestorePass = (message) => ({
	type: 'SET_MESSAGE_RESTORE_PASS',
	payload: message,
});