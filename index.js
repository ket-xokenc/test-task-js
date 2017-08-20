var repair = document.getElementById("repair-header");
var priceList = [
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
for (var i = 0; i < priceList.length; i++) {
  var newDiv = document.createElement('div');
  newDiv.className = 'row';
  repair.appendChild(newDiv);
  
  for (var key in priceList[i]) {
    var newEl = document.createElement('div');
    newEl.innerHTML = priceList[i][key];
    newEl.className = 'col-md-4';
    newDiv.appendChild(newEl);
  }
}