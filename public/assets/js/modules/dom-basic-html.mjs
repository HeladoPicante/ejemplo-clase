const tag = (name, content=`${placeHolder(name)} content ${name}`, style="") => {
    return `<${name} ${style}> ${content} </${name}>`;
};

const h = (content) => tag("h1", content);
const p = (content) => tag("p", content);
const b = (content) => tag("strong", content);
const ol = (content) => tag("ol", content);
const ul = (content) => tag("ul", content);
const li = (content) => tag("li", content);

export { h, p, b, ol, ul, li };