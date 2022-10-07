
function createElement(el, content, className){
    const element = document.createElement(el);
    element.textContent = content;
    element.classList.add(className);

    return element;
}

export default createElement;