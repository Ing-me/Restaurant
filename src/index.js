import './style.css';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

import createElement from './createElement';
import createSingleElement from './createSingleElement';


function component(){
    const element = document.querySelector('#content');

    element.appendChild(createHeader());
    element.appendChild(createMain());
    element.appendChild(createFooter());

    activeNavItem(document.querySelector('.navigation'));
    createHome();

    return element;
}

document.body.appendChild(component());


function createHeader(){
    //Create the navBar element
    const header = createElement('div', null, 'navBar');
    const title = createElement('div', null, 'title-name');
    title.textContent = "Gou-Bouch Lakay";
    //navbar menu
    header.appendChild(title);
    header.appendChild(Navigation());  

    return header;
}

//Navigation function
function Navigation(){
    const menuContainer = createElement('div', null, 'menu-container')

    const home = createElement('div', null, 'navigation');
    const ahome = createSingleElement('div', 'Home');
    home.appendChild(ahome);
    home.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        activeNavItem(home);
        createHome();
    });


    const menu = createElement('div', null, 'navigation');
    const amenu = createSingleElement('div', 'Menu');
    menu.appendChild(amenu);
    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        activeNavItem(menu);
        createMenu();
    });

    const contact = createElement('div', null, 'navigation');   
    const acontact = createSingleElement('div', 'Contact');
    contact.appendChild(acontact);
    contact.addEventListener('click', (e) => {
        if(e.target.classList.contains("active")) return;
        activeNavItem(contact);
        createContact();
    });
    
    
    menuContainer.appendChild(home);
    menuContainer.appendChild(menu);
    menuContainer.appendChild(contact);

    return menuContainer;
}

function activeNavItem(x) {
    const divs = document.querySelectorAll(".navigation");
  
    divs.forEach((div) => {
      if (div !== this) {
        div.classList.remove("active");
      }
    });
  
    x.classList.add("active");
  }


  function createMain() {
    const content = createElement('div', null, 'main');
    return content;
}


  //footer function
function createFooter(){
    //Create the footer element
    const footer = createElement('div', null, 'footer');
    const footertext = createSingleElement('div', 'Powered by meme123');
    const footertext1 = createSingleElement('div', 'KwenTIC 2022');

        //apppend the footer element
    footer.appendChild(footertext)
    footer.appendChild(footertext1)
    
    return footer;
}