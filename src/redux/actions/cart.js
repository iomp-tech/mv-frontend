import axios from "axios";

import { API_DOMEN } from '../.././api';

export const fetchCartGoods = (query = "") => (dispatch) => {
	dispatch({
		type: 'SET_LOADED_CART_GOODS',
		payload: false,
	});

	axios.get(`${API_DOMEN}/goods?${query}`).then((response) => {
		dispatch(setCartGoods(response));
	});
};

export const setCartGoods = (items) => ({
	type: 'SET_CART_GOODS',
	payload: items,
});

export const addGoodsCart = (item) => ({
	type: 'ADD_GOODS_CART',
	payload: item,
});

export const statusGoodsPush = (status) => ({
	type: 'STATUS_GOODS_PUSH',
	payload: status,
});

export const removeCartItem = (id) => ({
	type: 'REMOVE_CART_ITEM',
	payload: id,
});