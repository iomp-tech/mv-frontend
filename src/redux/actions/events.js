import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchEvents = () => (dispatch) => {
	axios.get(`${API_DOMEN}/timetable?slider=true`).then(({ data }) => {
		dispatch(setEvents(data));
	});
};

export const setEvents = (items) => ({
	type: 'SET_EVENTS',
	payload: items,
});