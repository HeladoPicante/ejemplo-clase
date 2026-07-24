const dialog = (id, buttonText = "Click Me", content = "") => {

	const button = document.createElement("button");
	button.command = "show-modal";
	button.setAttribute("commandfor", id);
	button.textContent = buttonText;

	const dialog = document.createElement("dialog");
	dialog.id = id;
	dialog.innerHTML = content;

	return [button, dialog];
};

export {
	dialog
};