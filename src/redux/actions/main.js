import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchMain = () => (dispatch) => {
	axios.get(`${API_DOMEN}/section/main`).then(({ data }) => {
		dispatch(setMain(data));
	});
};

export const setMain = (content) => ({
	type: 'SET_MAIN',
	payload: content,
});