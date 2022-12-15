import './style.css';
import dog from './dog.jpeg';
import menuCreate from './menu';
import homePage from './homepage';

(function homepage() {
  document.getElementById('content').classList.remove('content');
  document.getElementById('content').classList.add('homePage');
  homePage();
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');
  tabs.innerHTML = `<h1 class="tab" id="home">HOME</h1><h1 class="tab" id="menu">MENU</h1><h1 class="tab" id="contact">CONTACT</h1>`;
  document.getElementById('content').insertAdjacentElement('beforebegin', tabs);
  const homeTab = document.querySelector('#home');
  const menuTab = document.querySelector('#menu');
  const contactTab = document.querySelector('#contact');
  homeTab.classList.add('tabOn');

  homeTab.addEventListener('click', () => {
    menuTab.classList.remove('tabOn');
    homeTab.classList.add('tabOn');
    contactTab.classList.remove('tabOn');
    document.getElementById('content').innerHTML = '';

    homePage();
  });
  menuTab.addEventListener('click', () => {
    menuTab.classList.add('tabOn');
    homeTab.classList.remove('tabOn');
    contactTab.classList.remove('tabOn');
    menuCreate();
  });
  contactTab.addEventListener('click', () => {
    menuTab.classList.remove('tabOn');
    homeTab.classList.remove('tabOn');
    contactTab.classList.add('tabOn');
  });
})();
