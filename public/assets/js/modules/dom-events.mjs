const buttonDemoMessage = (text = "Send", message = "", action = () => {}) => {

	const element = document.createElement("button");
	element.textContent = text;
	element.dataset.message = message;
	element.onclick = action;

	return element;
};

const button = (text = "Send", action = () => {}) => {

	const element = document.createElement("button");
	element.textContent = text;
	element.onclick = action;

	return element;
};

export {
	buttonDemoMessage,
	button
};