import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchEmailForm = () => (dispatch) => {
	axios.get(`${API_DOMEN}/form`).then(({ data }) => {
		dispatch(setEmailForm(data));
	});
};

export const setEmailForm = (items) => ({
	type: 'SET_EMAIL_FORM',
	payload: items,
});