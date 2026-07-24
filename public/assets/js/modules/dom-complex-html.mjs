const complexElement = (name, opt={}, style={}) => {
    const obj = document.createElement(name);
    Object.assign(obj, opt);
    Object.assign(obj.style, opt.style);

    return obj;
};

export { complexElement };