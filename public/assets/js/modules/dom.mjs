// import{
//     h, p
// } from "./dom-basic-html.mjs";
// import {getData} from "./dom-fetch.mjs"
// import {complexElement} from "./dom-complex-html.mjs"


// const print = (content) => {
//     document.body.innerHTML += content;
// };

// const printASAppend = (obj) => {
//     document.body.appendChild(obj);
// };

// export { h, p, complexElement, print, printASAppend, getData }

import { h, p, b, ol, ul, li } from "./dom-basic-html.mjs";
import { box, toHTML } from "./dom-box.mjs";
import { getData } from "./dom-fetch.mjs";
import { button, buttonDemoMessage } from "./dom-events.mjs";
import { dialog } from "./dom-dialog.mjs";
import { columnLeft, columnRight } from "./dom-columns.mjs";

const init = () => {
	document.body.style.backgroundColor = 'black';
	document.body.style.color = 'white';
	document.body.style.fontSize = '24px';
	document.body.style.fontFamily = 'monospace';
};

const print = (content) => {
	document.body.innerHTML += content;
};

const printAsAppend = (content) => {
	document.body.appendChild(content);
};

export {
	init,
	h, p, b, ol, ul, li,
	print,
	box, toHTML,
	button, buttonDemoMessage,
	dialog,
	printAsAppend,
	getData,
	columnLeft, columnRight
};