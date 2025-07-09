const firstCard = document.getElementById('card1');
const secondCard = document.getElementById('card2');
const thirdCard = document.getElementById('card3');


fetchDataAndDisplay();

async function fetchDataAndDisplay() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        const products = data.products;

        if (products.length >= 3) {
            firstCard.textContent = products[0].title;
            
             firstCard.textContent = products[0].description;

            secondCard.textContent = products[1].title;
            secondCard.textContent = products[1].description;

            thirdCard.textContent = products[2].title;
            thirdCard.textContent=products[2].description;
        } else {
            console.error("Not enough products to display.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}