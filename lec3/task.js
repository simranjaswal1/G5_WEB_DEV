var cart = ["SHOES", "WATCHES", "BOOKS", "PEN", "BOTTLE"];
var price = 0;
var noOfItems = 0;
var orderId = null;

function createOrder(cart) {
    noOfItems = cart.length;
    price = noOfItems * 500;
    console.log("No of items: " + noOfItems);
    console.log("Price: " + price);

   
    setTimeout(() => placeOrder(price, noOfItems), 3000);
}

function placeOrder(price, noOfItems) {
    orderId = Math.floor(Math.random() * 100000);
    console.log("Order ID is: " + orderId);

   
    setTimeout(() => orderPayment(price, orderId, noOfItems), 3000);
}

function orderPayment(price, orderId, noOfItems) {
    console.log("Payment successful for Order ID: " + orderId);

   
    setTimeout(orderStatus, 3000);
}

function orderStatus() {
    console.log("Order Confirmed!");
    console.log("Order ID: " + orderId);
    console.log("Total Items: " + noOfItems);
    console.log("Total Price: " + price);
}


createOrder(cart);
