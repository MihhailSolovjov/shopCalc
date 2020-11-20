const addButton = document.getElementById('add');
const productName = document.querySelector('#item-name');
const iiPrice = document.querySelector('#item-price');
const totalSpan = document.querySelector('.total-price');
const list = document.querySelector('#item-list');
let total = 0;



addButton.addEventListener('click', (event)=> {
    let mealName = productName.value; 
    let iPrice = parseInt(iiPrice.value); 
    total = total + iPrice; 
    totalSpan.innerHTML = total;

    let listItem = document.createElement('li');
    listItem.classList.add('collection-item');
    let text = `Product: ${mealName}. Price: ${iPrice}`;
    listItem.appendChild(document.createTextNode(text));
    console.log(listItem);
    list.appendChild(listItem);

    //clear the input fields
    productName.value = '';
    iiPrice.value = '';

    console.log('Product:', typeof(mealName));
    console.log('Price:', typeof(productPrice));
    console.log('Total Price:', total);

    event.preventDefault();
});