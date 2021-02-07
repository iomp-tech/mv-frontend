import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchFooterMenu = () => (dispatch) => {
	axios.get(`${API_DOMEN}/footer/menu`).then(({ data }) => {
		dispatch(setFooterMenu(data));
	});
};

export const fetchFooterContact = () => (dispatch) => {
	axios.get(`${API_DOMEN}/footer/contact`).then(({ data }) => {
		dispatch(setFooterContact(data));
	});
};

export const fetchFooterSocial = () => (dispatch) => {
	axios.get(`${API_DOMEN}/footer/social`).then(({ data }) => {
		dispatch(setFooterSocial(data));
	});
};

export const setFooterMenu = (items) => ({
	type: 'SET_FOOTER_MENU',
	payload: items,
});

export const setFooterContact = (items) => ({
	type: 'SET_FOOTER_CONTACT',
	payload: items,
});

export const setFooterSocial = (items) => ({
	type: 'SET_FOOTER_SOCIAL',
	payload: items,
});