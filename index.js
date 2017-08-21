const repair = document.getElementById("repair-header");
const priceList = [
  {
    name: 'Ламинат',
    price: '408.75'
  },
  {
    name: 'Подлoжка под ламинат',
    price: '133'
  },
  {
    name: 'Плинтус',
    price: '27.6'
  },
  {
    name: 'Обои',
    price: '280'
  },
    {
    name: 'Карниз ',
    price: '140'
  },
    {
    name: 'Дверное полотно',
    price: '1099'
  },
  {
    name: 'Дверная ручка ',
    price: '459.14'
  },
  {
    name: 'Коробка дверная',
    price: '309.96'
  },
];
for (let i = 0; i < priceList.length; i++) {
  let rowElement = document.createElement('div');
  rowElement.className = 'row';
  repair.appendChild(rowElement);
  
  for (let key in priceList[i]) {
    let colElement = document.createElement('div');
    colElement.innerHTML = priceList[i][key];
    colElement.className = 'col-md-4';
    rowElement.appendChild(colElement);
  }
}