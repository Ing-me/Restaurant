import Soup from './assets/Soup-Joumou1.jpg';
import Maymoulen from './assets/maymoulen.jpeg';
import griyo from './assets/griyo.jpg';
import poisson from './assets/poisson.jpg';

import createElement from "./createElement";
import createSingleElement from "./createSingleElement";


function createMenu(){
    const content = document.querySelector('.main');
    content.textContent = ''; 

    const menu = createElement('div', null, 'menu-content');

    const title = createElement('div', 'Menu', 'menu-title');
    menu.appendChild(title);

    const menu_cards = createElement('div', null, 'menu-cards');
    const contact = createElement('div', 'Book or Call us  now', 'menu-footer');

    menu_cards.appendChild(createCard())
    menu_cards.appendChild(createCard1())
    menu_cards.appendChild(createCard2())
    menu_cards.appendChild(createCard3())

    menu.appendChild(menu_cards);
    menu.appendChild(menu_cards);
    menu.appendChild(contact);

    content.appendChild(menu)
    return content;
}

export default createMenu;

function createCard(){
    const card = createElement('div', null, 'menu-card');
    const cardTitle = createElement('div', null, 'menu-cardTitle');
    const cardText = createElement('div', null, 'menu-cardText');
    const h1 = createElement('div', "Soupe Joumou","soupe")
    const h2 = createElement('div', "Lorem ipsum vele as sacadsa", null)
    const h3 = createElement('div', "Lorem ipsum vele as sacadsa", null )

    const img = new Image();
    img.src = Soup;
    cardTitle.appendChild(img);

    cardTitle.appendChild(h1);
    cardTitle.appendChild(h2);
    cardTitle.appendChild(h3);
   
    card.appendChild(cardTitle)
   
    return card
}

function createCard1(){
    const card = createElement('div', null, 'menu-card');
    const cardTitle = createElement('div', null, 'menu-cardTitle');
    const cardText = createElement('div', null, 'menu-cardText');
    const h1 = createElement('div', "Mais moulu","soupe")
    const h2 = createElement('div', "Lorem ipsum vele as sacadsa", null)
    const h3 = createElement('div', "Lorem ipsum vele as sacadsa", null )

    const img = new Image();
    img.src = Maymoulen;
    cardTitle.appendChild(img);

    cardTitle.appendChild(h1);
    cardTitle.appendChild(h2);
    cardTitle.appendChild(h3);
   
    card.appendChild(cardTitle)
   
    return card
}

function createCard2(){
    const card = createElement('div', null, 'menu-card');
    const cardTitle = createElement('div', null, 'menu-cardTitle');
    const cardText = createElement('div', null, 'menu-cardText');
    const h1 = createElement('div', "Griyo","soupe")
    const h2 = createElement('div', "Lorem ipsum vele as sacadsa", null)
    const h3 = createElement('div', "Lorem ipsum vele as sacadsa", null )

    const img = new Image();
    img.src = griyo;
    cardTitle.appendChild(img);

    cardTitle.appendChild(h1);
    cardTitle.appendChild(h2);
    cardTitle.appendChild(h3);
   
    card.appendChild(cardTitle)
   
    return card
}

function createCard3(){
    const card = createElement('div', null, 'menu-card');
    const cardTitle = createElement('div', null, 'menu-cardTitle');
    const cardText = createElement('div', null, 'menu-cardText');
    const h1 = createElement('div', "Poisson","soupe")
    const h2 = createElement('div', "Lorem ipsum vele as sacadsa", null)
    const h3 = createElement('div', "Lorem ipsum vele as sacadsa", null )

    const img = new Image();
    img.src = poisson;
    cardTitle.appendChild(img);

    cardTitle.appendChild(h1);
    cardTitle.appendChild(h2);
    cardTitle.appendChild(h3);
   
    card.appendChild(cardTitle)
   
    return card
}