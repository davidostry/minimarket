const products = [
    {
        name: "Milk 3%",
        category: "Dairy",
        price: 7.90,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "White Bread",
        category: "Bakery",
        price: 8.50,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Apples",
        category: "Fruits",
        price: 12.90,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Bananas",
        category: "Fruits",
        price: 9.90,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Tomatoes",
        category: "Vegetables",
        price: 8.90,
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Coffee",
        category: "Beverages",
        price: 24.90,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Orange Juice",
        category: "Beverages",
        price: 11.90,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Eggs",
        category: "Dairy",
        price: 13.90,
        image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Pasta",
        category: "Dry Food",
        price: 7.90,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
    }
];

const allProducts = document.querySelector(".products")
const fetchBtn = document.querySelector(".button")
const orderButton = document.querySelector(".order")
const cart = document.querySelector(".cart")
const totalPrice = document.querySelector(".totalPrice")
const orders = document.querySelector(".orders");
const empty = document.querySelector(".empty")
const execute = document.querySelector(".executeButton")
let total = 0;

fetchBtn.addEventListener("click", (e) => {
    createProducts()

})

function createProducts() {
    fetchBtn.remove()

    products.forEach((product) => {
        const card = createCard(product.image, product.name, product.category, product.price);
        allProducts.appendChild(card)
    })
}

function createCard(img, tytle, category, cost) {
    const card = document.createElement("div");
    const imgTag = document.createElement("img");
    const name = document.createElement("h3");
    const section = document.createElement("p");
    const price = document.createElement("p");
    const order = document.createElement("button");



    card.classList.add("card");
    price.classList.add("price")
    order.classList.add("order");


    name.textContent = tytle;
    imgTag.src = img;
    section.textContent = category;
    price.textContent = cost
    order.textContent = "add to order"

    card.appendChild(name);
    card.appendChild(imgTag);
    card.appendChild(section);
    card.appendChild(price);
    card.appendChild(order)

    return card;

}




allProducts.addEventListener('click', (e) => {

    if (!e.target.classList.contains("order")) {
        return;
    }
    const orderCard = e.target.closest(".card");
    const tytle = orderCard.querySelector("h3").textContent;
    const price = Number(orderCard.querySelector(".price").textContent)
    createOrder(tytle, price)
})

function createOrder(tytle, price) {
    const item = document.createElement("div");
    const text = document.createElement("span");
    const removeButton = document.createElement("button");

    text.textContent = `${tytle} = ${price}`;
    removeButton.textContent = "remove";

    item.classList.add("item")
    removeButton.classList.add("remove")

    item.appendChild(text);
    item.appendChild(removeButton);

    total += price;
    empty.remove();
    orders.prepend(item);
    totalPrice.textContent = `total price: ${total.toFixed(2)} $`

    removeButton.addEventListener('click', (e) => {
        item.remove();
        total -= price;
        totalPrice.textContent = `total price: ${total.toFixed(2)} $`;

    })
}

execute.addEventListener('click', (e) => {

    orders.innerHTML = "";
    total = 0
    totalPrice.textContent = "total price: 0 $";

    orders.appendChild(empty);
})







