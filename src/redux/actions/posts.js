import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchPosts = (cat = "", query = null) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_POSTS',
		payload: false,
	});

	axios.get(`${API_DOMEN}/posts?${cat !== "" ? `category=${cat}&` : ""}${query}`).then(({ data }) => {
		dispatch(setPosts(data));
	}).catch(() => {
		dispatch({
			type: 'SET_LOADED_POSTS',
			payload: true,
		});
	});
};

export const fetchLimitPosts = (cat = "", query = null) => (dispatch) => {
	dispatch({
		type: 'SET_LIMIT_LOADED_POSTS',
		payload: false,
	});

	axios.get(`${API_DOMEN}/posts?${cat !== "" ? `category=${cat}&` : ""}${query}`).then(({ data }) => {
		dispatch(setLimitPosts(data));
	}).catch(() => {
		dispatch({
			type: 'SET_LIMIT_LOADED_POSTS',
			payload: true,
		});
	});
};

export const fetchOldPosts = (limit = null) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_OLD_POSTS',
		payload: false,
	});

	axios.get(`${API_DOMEN}/posts?_sort=id&_order=desc&${limit !== null ? `_limit=${limit}` : ""}`).then(({ data }) => {
		dispatch(setOldPosts(data));
	}).catch(() => {
		dispatch({
			type: 'SET_LOADED_POSTS',
			payload: true,
		});
	});;
};

export const fetchPostById = (id = null) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_POSTS',
		payload: false,
	});

	axios.get(`${API_DOMEN}/posts${id !== null ? `/${id}` : ""}`).then(({ data }) => {
		dispatch(setPostById(data));
	}).catch(() => {
		dispatch({
			type: 'SET_LOADED_POSTS',
			payload: true,
		});
	});;
};

export const fetchPostNextById = (id = null) => (dispatch) => {
	axios.get(`${API_DOMEN}/posts${id !== null ? `/${id}` : ""}`).then(({ data }) => {
		dispatch(setPostNextById(data));
	}).catch(() => {
		dispatch(setPostNextById({}));
		dispatch({
			type: 'SET_LOADED_POSTS',
			payload: true,
		});
	});;
};

export const fetchPostsType = () => (dispatch) => {
	axios.get(`${API_DOMEN}/postType`).then(({ data }) => {
		dispatch(setPostsType(data));
	});
};

export const setPosts = (items) => ({
	type: 'SET_POSTS',
	payload: items,
});

export const setLimitPosts = (items) => ({
	type: 'SET_LIMIT_POSTS',
	payload: items,
});

export const setOldPosts = (items) => ({
	type: 'SET_OLD_POSTS',
	payload: items,
});

export const setPostById = (items) => ({
	type: 'SET_POST_BY_ID',
	payload: items,
});

export const setPostNextById = (items) => ({
	type: 'SET_POST_NEXT_BY_ID',
	payload: items,
});

export const setPostsType = (items) => ({
	type: 'SET_POSTS_TYPE',
	payload: items,
});

export const setPostsFilters = (items) => ({
	type: 'SET_POSTS_FILTERS',
	payload: items
});

export const plusPostsLimit = (limit) => ({
	type: 'PLUS_POSTS_LIMIT',
	payload: limit
});