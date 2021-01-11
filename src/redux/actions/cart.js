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