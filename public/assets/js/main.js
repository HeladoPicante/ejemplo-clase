// import{printASAppend, complexElement} from "./modules/dom.mjs"

// initTheme("dark");

// let h = complexElement("h1", {
//     "textContent": "Ejemplo"
// });

// printAsAppend(h);
import {
	box, toHTML,
	print,
	h, p, ol, ul, li,
	button, buttonDemoMessage,
	dialog,
	printAsAppend,
	getData,
	columnLeft, columnRight
} from "./modules/dom.mjs";

const send = button(
	"Enviar",
	async (clickEvent) => {
		let me = clickEvent.target;

		let content = await getData("api/dni-all-women", { example: "si se pudo" });

		if (content.status) {

			const html = [];

			content.persons.forEach(person => {
				html.push(li(`Se encontró a ${person.name} con DNI ${person.dni}.`));
			});

			let personsContent = box(
				"#282a6cff",
				"#61b4ebff",
				`${h('Respuesta del contenido JSON')}
				${ol(html.join(""))}`
			);

			Object.assign(personsContent.style, {
				position: "fixed",
				bottom: 0,
				right: 0
			});

			const deleteMe = buttonDemoMessage(
				"Cerrar",
				"",
				async (clickEvent) => {
					const me = clickEvent.target;
					me.parentElement.remove();
				}
			);

			personsContent.appendChild(deleteMe);

			printAsAppend(
				personsContent
			);
		} else {
			// Negativo, error
		}
	}
);

const [aboutDialogButton, aboutDialogComponent] = dialog(
	"about-dialog",
	"Presionar",
	"Contenido de ejemplo"
);

console.log(aboutDialogButton, aboutDialogComponent);

printAsAppend(aboutDialogButton);
printAsAppend(aboutDialogComponent);

columnLeft.appendChild(send);
columnLeft.appendChild(box(
	"#6c4f28ff",
	"#ebc961ff",
	`${h("Ejemplo de un título")}
	${p("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}`
));

columnRight.appendChild(aboutDialogButton);

printAsAppend(columnLeft);
printAsAppend(columnRight);
printAsAppend(aboutDialogComponent);
printAsAppend(box(
	"#eb173ff",
	"#ebc961ff",
	`${h("Ejemplo de un título")}
	${p("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}`
));