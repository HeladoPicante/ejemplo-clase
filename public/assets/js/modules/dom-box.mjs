const box = (colorFg, colorBg, content = `«Placeholder content»`) => {

	let obj = document.createElement("div");
	obj.style.color = colorFg;
	obj.style.backgroundColor = colorBg;
	obj.style.fontFamily = "monospace";
	obj.style.fontSize = "16px";
	obj.style.border = `solid 2px ${colorFg}`;
	obj.style.borderRadius = "3px";
	obj.style.padding = "12px";
	obj.style.margin = "90px";
	obj.innerHTML = content;

	return obj;
};

const toHTML = (obj) => {

	return obj.outerHTML;
};

export {
	box,
	toHTML
};