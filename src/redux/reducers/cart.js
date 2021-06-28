const initialState = {
	cart: !JSON.parse(localStorage.getItem("cart")) ? {} : JSON.parse(localStorage.getItem("cart")),
	awo_shop_storage: localStorage.getItem("awo_shop_storage"),
	push: false,
	items: {},
	isLoaded: false,
};

const cart = (state = initialState, action) => {
	if (action.type === 'SET_CART_GOODS') {
		const newItems = {};

		action.payload.data.map(obj => (
			newItems[`good-${obj.id}`] = obj
		));

		return {
			...state,
			items: newItems,
			isLoaded: true,
		};
	}
	if (action.type === 'SET_LOADED_CART_GOODS') {
		return {
			...state,
			isLoaded: action.payload,
		};
	}
	if (action.type === 'ADD_GOODS_CART') {
		const newItem = {
			...state.cart,
			[action.payload.id]: {
				...action.payload
			}
		};

		localStorage.setItem("cart", JSON.stringify(newItem));

		if (!state.cart.length) {
			localStorage.setItem("awo_shop_storage", action.payload.awo_shop);

			return {
				...state,
				cart: newItem,
				awo_shop_storage: action.payload.awo_shop
			};
		}

		return {
			...state,
			cart: newItem
		};
	}

	if (action.type === 'REMOVE_CART_ITEM') {
		const newItem = {
			...state.cart
		};

		delete newItem[action.payload];

		localStorage.setItem("cart", JSON.stringify(newItem));

		if (!Object.keys(newItem).length) {
			localStorage.removeItem("awo_shop_storage");

			return {
				...state,
				cart: newItem,
				awo_shop_storage: undefined
			};
		}

		return {
			...state,
			cart: newItem,
		};
	}

	if (action.type === 'STATUS_GOODS_PUSH') {
		return {
			...state,
			push: action.payload
		};
	}

	return state;
};

export default cart;