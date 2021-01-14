import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchInstitute = () => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_INSTITUTE',
		payload: false,
	});

	axios.get(`${API_DOMEN}/institute`).then(({data}) => {
		dispatch(setInstitute(data));
	});
};

export const setInstitute = (items) => ({
	type: 'SET_INSTITUTE',
	payload: items,
});