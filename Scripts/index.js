//Variables
let grandtotal = 0;
let cart = [];

function Increment(valueinput){
    var value = parseInt(document.getElementById(valueinput).value);
    value++;
    document.getElementById(valueinput).value = value;
}
function Decrement(valueinput){
    var value = parseInt(document.getElementById(valueinput).value);
    if(value > 0){
        value--;
        document.getElementById(valueinput).value = value;
    }
    
}

function AddToCart(name , price){
    var quantity = document.getElementById(`${name}_quantity`).value;
    var total = quantity * price;
    var itemName = name.replaceAll('_', ' ');
    var unitPrice = price;

    grandtotal += total;

    let item = `<tr>
    <td>${itemName}</td>
    <td>${unitPrice}</td>
    <td>${quantity}</td>
    <td> LKR. ${total}</td>
    <tr>
    `

    var item_for_favorite = {
        name : itemName,
        price : unitPrice,
        quantity : quantity,
        total : total
    }

    cart.push(item_for_favorite);

    document.querySelector('.cart_items').innerHTML += item;
    
    document.querySelector('.total').innerText = `LKR. ${grandtotal}`;
}

function AddtoFavorite(){
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('grandtotal', grandtotal);
    alert('Added to Favorite');
}

function ApplyFavorite(){
    cart = JSON.parse(localStorage.getItem('cart'));
    grandtotal = localStorage.getItem('grandtotal');
    document.querySelector('.cart_items').innerHTML = '';
    cart.forEach(item => {
        let item_html = `<tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td> LKR. ${item.total}</td>
        <tr>
        `
        document.querySelector('.cart_items').innerHTML += item_html;
    });
    document.querySelector('.total').innerText = `LKR. ${grandtotal}`;
}

function checkout(){
    localStorage.setItem('order', JSON.stringify(cart));
    localStorage.setItem('total', grandtotal);
}
