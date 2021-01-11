import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchServices = () => (dispatch) => {
	axios.get(`${API_DOMEN}/section/services`).then(({ data }) => {
		dispatch(setServices(data));
	});
};

export const setServices = (items) => ({
	type: 'SET_SERVICES',
	payload: items,
});