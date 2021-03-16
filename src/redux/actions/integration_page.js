import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchIntegrationPage = () => (dispatch) => {
	axios.get(`${API_DOMEN}/integrationPage`).then(({ data }) => {
		dispatch(setIntegrationPage(data));
	});
};

export const setIntegrationPage = (items) => ({
	type: 'SET_INTEGRATION_PAGE',
	payload: items,
});