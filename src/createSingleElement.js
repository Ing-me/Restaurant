
function createSingleElement(el, content){
    const element = document.createElement('div');
    element.textContent = content;
    return element;
}

export default createSingleElement;