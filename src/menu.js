import dog from './dog.jpeg';

function menuCreate(menuItem) {
  document.getElementById('content').innerHTML = '';
  function menuItem(img, title, price) {
    const container = document.createElement('div');
    container.classList.add('container');
    const itemContainer = document.createElement('div');
    itemContainer.innerHTML = `<div class="foodItemContainer"> <img src="${img}" alt="food" class"image"><h2 class="foodTitle">${title}</h2><h3 class="price">$${price}</h3></div>`;
    itemContainer.classList.add('itemContainer');

    container.appendChild(itemContainer);
    content.appendChild(container);
  }

  menuItem(dog, 'Fish', 12.36);
  menuItem(dog, 'chicken', 19.99);
  menuItem(dog, 'Fish', 12.36);
  menuItem(dog, 'steak', 15.99);
  menuItem(dog, 'steak', 15.99);
  menuItem(dog, 'Fish', 12.36);
  menuItem(dog, 'chicken', 19.99);
  menuItem(dog, 'Fish', 12.36);
  menuItem(dog, 'steak', 15.99);
  menuItem(dog, 'steak', 15.99);
}
// function menuItem(img, title, price) {
//   const container = document.createElement('div');
//   container.classList.add('container');

//   // itemContainer.classList.add('hidden');
//   let itemContainer = document.createElement('div');
//   container.appendChild(itemContainer);

//   itemContainer.classList.add('itemContainer');
//   let itemImg = document.createElement('img');
//   itemImg.src = 'dog.jpeg';
//   itemImg.classList.add('img', 'items');

//   itemContainer.appendChild(itemImg);
//   let itemTitle = document.createElement('div');
//   itemTitle.classList.add('title', 'items');

//   let itemPrice = document.createElement('div');
//   itemPrice.classList.add('price', 'items');
//   itemContainer.appendChild(itemTitle);
//   itemContainer.appendChild(itemPrice);
// }

export default menuCreate;
