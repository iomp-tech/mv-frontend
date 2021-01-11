import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchAbout = () => (dispatch) => {
	axios.get(`${API_DOMEN}/section/about`).then(({ data }) => {
		dispatch(setAbout(data));
	});
};

export const setAbout = (items) => ({
	type: 'SET_ABOUT',
	payload: items,
});