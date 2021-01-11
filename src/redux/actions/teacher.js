import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchTeacher = () => (dispatch) => {
	axios.get(`${API_DOMEN}/teachers`).then(({ data }) => {
		dispatch(setTeacher(data));
	});
};

export const fetchTeacherMain = (limit = null) => (dispatch) => {
	axios.get(`${API_DOMEN}/teachers?main=true${limit !== null ? `&_limit=${limit}` : ""}`).then(({ data }) => {
		dispatch(setTeacherMain(data));
	});
};

export const setTeacherMain = (items) => ({
	type: 'SET_TEACHER_MAIN',
	payload: items,
});

export const setTeacher = (items) => ({
	type: 'SET_TEACHER',
	payload: items,
});