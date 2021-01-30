const initialState = {
	type: "blackWhite",
	color: "",
	bgColor: "",
	rgb: "",
	size: "1X",
};

const visually = (state = initialState, action) => {
	if (action.type === 'SET_VISUALLY') {
		localStorage.setItem("VISUALLY_TYPE", action.payload);

		let style = {};

		if (action.payload === "blackWhite") {
			style = {
				color: "#000",
				bgColor: "#fff",
				rgb: "0, 0, 0"
			};
		} else if (action.payload === "whiteBlack") {
			style = {
				color: "#fff",
				bgColor: "#000",
				rgb: "255, 255, 255"
			};
		} else if (action.payload === "darkBlueAqua") {
			style = {
				color: "#06054F",
				bgColor: "#00C2FF",
				rgb: "6, 5, 79"
			};
		}

		return {
			...state,
			...style,
			type: action.payload,
		};
	}
	if (action.type === 'SET_SIZE_VISUALLY') {
		let size = "";

		if (action.payload === null) {
			size = "X1";
		} else {
			size = action.payload;
		}

		localStorage.setItem("VISUALLY_SIZE", size);

		return {
			...state,
			size: size,
		};
	}
	return state;
};

export default visually;