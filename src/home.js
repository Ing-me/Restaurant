import createElement from './createElement';
import Soup from './assets/Soup-Joumou1.jpg';
import Maymoulen from './assets/maymoulen.jpeg';
import griyo from './assets/griyo.jpg';
import poisson from './assets/poisson.jpg';
import createSingleElement from './createSingleElement';

function createHome(){
    //Create the content element
    const content = document.querySelector('.main');
    content.textContent = '';
    
    const imgContainer = createElement('div', null, 'img-container');
    const cards = createElement('div', null, 'cards');
    const card = createElement('div', null, 'card');
    const cardTitle = createElement('div', null, 'card-title');
    const cardText = createElement('div', null, 'card-text');
    const cardFooter = createElement('div', null, 'card-footer');

    cardFooter.textContent = "Book or Call us now";
    
    const cardSubtitle1 = createElement('div', null, 'card-subtitle');
    cardSubtitle1.textContent = "Gou-Bouch Lakay"; 
    cardTitle.appendChild(cardSubtitle1);

    const cardSubtitle2 = createElement('div', null, 'card-message');
    cardSubtitle2.textContent = "is changing your taste";
    cardTitle.appendChild(cardSubtitle2);

    //Create content child
    const divimg1 = createElement('div',null, 'image');
    const divimg2 = createElement('div',null, 'image');
    const divimg3 = createElement('div',null, 'image');

    
    const img = new Image();
    img.src = Soup;
    divimg1.appendChild(img);

    const img1 = new Image();
    img1.src = Maymoulen;
    divimg2.appendChild(img1);

    const img2 = new Image();
    img2.src = griyo;
    divimg3.appendChild(img2);

    const ps = new Image();
    ps.src = poisson;
    cardText.appendChild(ps);


    content.appendChild(imgContainer);
    content.appendChild(cards);

    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(cardFooter);

    cards.appendChild(card);

    //Append content child
    imgContainer.appendChild(divimg1);
    imgContainer.appendChild(divimg2);
    imgContainer.appendChild(divimg3);

    return content;
}

export default createHome;