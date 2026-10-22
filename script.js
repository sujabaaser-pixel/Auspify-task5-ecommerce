const products = [
  { id: 1, name: "Wireless Headphones", price: 45.99, category: "electronics" },
  { id: 2, name: "Smart Watch", price: 89.99, category: "electronics" },
  { id: 3, name: "Cotton T-Shirt", price: 15.99, category: "clothing" },
  { id: 4, name: "Denim Jacket", price: 55.00, category: "clothing" },
  { id: 5, name: "Leather Wallet", price: 25.50, category: "accessories" },
  { id: 6, name: "Sunglasses", price: 19.99, category: "accessories" },
  { id: 7, name: "Bluetooth Speaker", price: 35.00, category: "electronics" },
  { id: 8, name: "Running Shoes", price: 60.00, category: "clothing" },
];

let cartCount = 0;

function renderProducts(productList) {
  const grid = document.getElementById("product-Grid");
  grid.innerHTML = "";

  if (productList.length === 0) {
    grid.innerHTML = "<p>No products found.</p>";
    return;
  }

  productList.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <span class="category-tag">${product.category}</span>
      <h3>${product.name}</h3>
      <div class="price">$${product.price.toFixed(2)}</div>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;

    grid.appendChild(card);
  });
}

function addToCart(productName) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  alert(productName + " added to cart!");
}

function filterProducts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;

  const filtered = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  renderProducts(filtered);
}

// Show all products when the page first loads
renderProducts(products);