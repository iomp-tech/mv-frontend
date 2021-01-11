import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchCategories = () => (dispatch) => {
	axios.get(`${API_DOMEN}/categories`).then(({ data }) => {
		dispatch(setCategories(data));
	});
};

export const setCategories = (items) => ({
	type: 'SET_CATEGORIES',
	payload: items,
});