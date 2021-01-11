const directionsInit = (item, line) => {
	let items_active = document.querySelectorAll('.directions__span_active');

	if (items_active.length > 0) {
		items_active[0].className = items_active[0].className.replace(' directions__span_active', '');
	}
	item.className += " directions__span_active";

	const width = item.offsetWidth;
	const left = item.offsetLeft;

	line.style.width = `${width}px`;
	line.style.left = `${left}px`;
};

export const directions = (index = 0, key = "") => {
	const line = document.querySelector('.directions__line');
	const item = document.querySelector(`#directions__span${key !== "" ? `-${key}` : ""}`);

	if (item) {
		item.addEventListener('click', directionsInit(item, line));
	} else {
		console.log("Item not found");
	}
};