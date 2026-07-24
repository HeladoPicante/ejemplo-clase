import { complexElement } from "./dom.mjs";

const initTheme = (theme="light") => {
    document.documentElement.setProperty("color-scheme","light dark");
    document.documentElement.setProperty("--light-bg","ghostwhite");
    document.documentElement.setProperty("--light-color","darkslategray");
    document.documentElement.setProperty("--dark-bg","darkslategray");
    document.documentElement.setProperty("--dark-color","ghostwhite");


    const style = complexElement(
        "style", {
            "textContent": `
                * {
                    background-color: light-dark(var(--light-bg), var(--dark-bg));
                    color: light-dark(var(--light-color), var(--dark-color));
            
            }
        `
        }
    )

    document.body.appendChild(style);

    document.body.style.colorScheme = theme;
};

export { initTheme };
