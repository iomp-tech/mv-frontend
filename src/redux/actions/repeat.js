import axios from "axios";

import { API_DOMEN } from '../.././api';

export const sendRepeat = (formData) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_REPEAT',
		payload: true,
	});

	if (formData.email.length > 100) {
		dispatch(setMessageRepeat("Максимальная длина email: 100 символов"));
	} else {
		axios
			.post(`${API_DOMEN}/repeatEmail`, formData)
			.then((response) => {
				dispatch({
					type: 'SET_LOADED_REPEAT',
					payload: false,
				});

				window.location.href = "/cabinet";
			})
			.catch((error) => {
				dispatch(setMessageRepeat("Такой email не существует или он уже подтвержден"));

				dispatch({
					type: 'SET_LOADED_REPEAT',
					payload: false,
				});
			});
	}
};

const setMessageRepeat = (message) => ({
	type: 'SET_MESSAGE_REPEAT',
	payload: message,
});