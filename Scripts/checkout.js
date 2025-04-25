document.addEventListener('DOMContentLoaded', function(){
    var orderItem = JSON.parse(localStorage.getItem('order'));
    var total = localStorage.getItem('total');

    document.querySelector('.cart_items').innerHTML = '';
    orderItem.forEach(item => {
        let item_html = `<tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td> LKR. ${item.total}</td>
        <tr>
        `
        document.querySelector('.cart_items').innerHTML += item_html;
        
    });
    document.querySelector('.total').innerText = `LKR. ${total}`;
});

document.getElementById('form1').addEventListener('submit', function(event) {
    let deliveryDate = document.getElementById('deliveryDate').value;
    let currentDate = new Date();
    let enteredDate = new Date(deliveryDate);

    if (enteredDate < currentDate) {
        alert('Delivery date must be in the future.');
        event.preventDefault();  
        return;
    }

   
    let cardNumber = document.getElementById('cardNumber').value;
    if (cardNumber.length !== 16) {
        alert('Card number must be 16 digits.');
        event.preventDefault();
        return;
    }

    let phone = document.getElementById('phone').value;
    if (phone.length !== 10) {
        alert('Phone number must be 10 digits.');
        event.preventDefault();
        return;
    }

    let address = document.getElementById('address').value;
    let deliveryAddress = document.getElementById('deliveryAddress').value;
    if (address.length < 10 || deliveryAddress.length < 10) {
        alert('Address fields must contain at least 10 characters.');
        event.preventDefault();
        return;
    }

    alert(`Order placed successfully! Your order will be delivered on ${deliveryDate}.`);

});
