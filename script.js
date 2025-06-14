const productList = document.getElementById("product-list");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p><strong>$${product.price}</strong></p>
        <button class="view-btn" data-id="${product.id}">View Details</button>
      `;
      productList.appendChild(card);
    });

    document.querySelectorAll(".view-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const productId = e.target.getAttribute("data-id");
        localStorage.setItem("selectedProductId", productId);
        window.location.href = "product.html";
      });
    });
  })
  .catch(error => {
    productList.innerHTML = "<p>Failed to load products.</p>";
    console.error(error);
  });
