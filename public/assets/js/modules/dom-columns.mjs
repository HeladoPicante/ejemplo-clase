const column = (opt = { "left": 0 }) => {

	const div = document.createElement("div");
	div.style.position = "fixed";
	div.style.top = "0";

	Object.assign(div.style, opt);

	div.style.overflowY = "auto";
	div.style.overflowX = "hidden";

	div.style.width = "50vw";
	div.style.height = "100vh";

	return div;
};

const columnLeft = column();
const columnRight = column({ "right": 0 });

export {
	columnLeft,
	columnRight,
};