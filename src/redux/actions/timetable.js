import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchTimetable = (limit = null, cat = "", query = "") => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_TIMETABLE',
		payload: false,
	});

	axios.get(`${API_DOMEN}/timetable?visibility=true&${limit !== null ? `_limit=${limit}&` : ""}${cat !== "" ? `category=${cat}&` : ""}${query !== "" ? query : ""}`).then((response) => {
		dispatch(setTimetable(response));
	});
};

export const fetchLimitTimetable = (limit = null, cat = "", query = "") => (dispatch) => {
	dispatch({
		type: 'SET_LIMIT_LOADED_TIMETABLE',
		payload: false,
	});

	axios.get(`${API_DOMEN}/timetable?visibility=true&${limit !== null ? `_limit=${limit}&` : ""}${cat !== "" ? `category=${cat}&` : ""}${query !== "" ? query : ""}`).then((response) => {
		dispatch(setLimitTimetable(response));
	});
};

export const fetchByUrlTimetable = (url = "") => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_TIMETABLE',
		payload: false,
	});

	axios.get(`${API_DOMEN}/timetable${url !== "" ? `?url=${url}` : ""}`).then(({ data }) => {
		dispatch(setByUrlTimetable(data));
	});
};

export const fetchTimetableType = () => (dispatch) => {
	axios.get(`${API_DOMEN}/timetableType`).then(({ data }) => {
		dispatch(setTimetableType(data));
	});
};

export const setTimetable = (items) => ({
	type: 'SET_TIMETABLE',
	payload: items,
});

export const setLimitTimetable = (items) => ({
	type: 'SET_LIMIT_TIMETABLE',
	payload: items,
});

export const setByUrlTimetable = (items) => ({
	type: 'SET_BY_URL_TIMETABLE',
	payload: items,
});

export const setTimetableType = (items) => ({
	type: 'SET_TIMETABLE_TYPE',
	payload: items,
});

export const setTimetableFilters = (items) => ({
	type: 'SET_TIMETABLE_FILTERS',
	payload: items,
});

export const plusTimetableLimit = (limit) => ({
	type: 'PLUS_TIMETABLE_LIMIT',
	payload: limit
});