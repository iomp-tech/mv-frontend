const initialState = {
	cart: !JSON.parse(localStorage.getItem("cart")) ? {} : JSON.parse(localStorage.getItem("cart")),
	totalPrice: !JSON.parse(localStorage.getItem("totalPrice")) ? 0 : JSON.parse(localStorage.getItem("totalPrice")),
	push: false
};

const cart = (state = initialState, action) => {
	if (action.type === 'ADD_GOODS_CART') {
		const newItem = {
			...state.cart,
			[action.payload.id]: {
				...action.payload
			}
		};

		let newPrice = state.totalPrice;

		if (state.cart[action.payload.id] === undefined) {
			newPrice = state.totalPrice + action.payload.price;
		}

		localStorage.setItem("totalPrice", JSON.stringify(newPrice));
		localStorage.setItem("cart", JSON.stringify(newItem));

		return {
			...state,
			cart: newItem,
			totalPrice: newPrice,
		};
	}

	if (action.type === 'REMOVE_CART_ITEM') {
		const newItem = {
			...state.cart
		};

		let newPrice = state.totalPrice;
		newPrice = parseFloat(state.totalPrice - newItem[action.payload].price);

		delete newItem[action.payload];

		localStorage.setItem("totalPrice", JSON.stringify(newPrice));
		localStorage.setItem("cart", JSON.stringify(newItem));

		return {
			...state,
			cart: newItem,
			totalPrice: newPrice,
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