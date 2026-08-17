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
        name: "Chocolate",
        category: "Sweets",
        price: 10.90,
        image: "https://images.unsplash.com/photo-1548907040-4d42f8c6c6f4?auto=format&fit=crop&w=600&q=80"
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
fetchBtn.addEventListener("click", (e)=>{
createProducts()
        
})

function createProducts(){
    products.forEach((product)=>{
        const card = createCard(product.image, product.name, product.category, product.price);
        allProducts.appendChild(card)
    })
}

function createCard(img, tytle, category, cost){
    const card = document.createElement("div");
    const imgTag = document.createElement("img");
    const name = document.createElement("h3");
    const section = document.createElement("p");
    const price = document.createElement("p");

    card.classList.add("card");
    imgTag.classList.add("card-img");

    name.textContent = tytle;
    imgTag.src = img;
    section.textContent = category;
    price.textContent = cost

    card.appendChild(name);
    card.appendChild(imgTag);
    card.appendChild(section);
    card.appendChild(price);

    return card;

}

