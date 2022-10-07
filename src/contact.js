import createElement from "./createElement.js";
import createSingleElement from "./createSingleElement.js";

function createContact(){
    const content = document.querySelector('.main');
    content.textContent = '';

    const contact = createElement('div', null, 'menu-content');
    const touch = createElement('div', 'We the best', 'menu-footer');

    const title = createElement('div', 'Contactez-nous', 'menu-title');
    contact.appendChild(title);
    contact.appendChild(contactElement())
    contact.appendChild(touch)


    

    content.appendChild(contact);

    return content;
}

export default createContact;

function contactElement(){
    const form = createElement('form', null, 'form');

    form.setAttribute("method", "post");
    form.setAttribute("action", " ");

    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name. setAttribute('name', 'fullname');
    name.setAttribute('placeholder', 'Your fullname');

    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('name', 'email');
    email.setAttribute('placeholder', 'Your email');

    const phone = document.createElement('input')
    phone.setAttribute('type', 'phone');
    phone.setAttribute('name', 'phone')
    phone.setAttribute('placeholder', 'Your phone number') 

    const message = document.createElement('textarea');
    message.setAttribute('type', 'text');
    message.setAttribute('name', 'message');
    message.setAttribute('placeholder', 'Your message please')

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.classList.add("submit-button")
    button.textContent = "Submit";


    form.appendChild(name);
    form.appendChild(email)
    form.appendChild(phone);
    form.appendChild(message);
    form.appendChild(button)

    return form;
}