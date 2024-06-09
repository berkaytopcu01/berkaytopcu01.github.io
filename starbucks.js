function redirectToPage() {
  window.location.href = "yemeksepeti.html"; // Yönlendirilecek sayfanın URL'si
}
document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.querySelector(".fa-cart-plus");
  const cartDropdown = document.getElementById("cartDropdown");
  const cartItems = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");

  let cart = [];
  let totalPrice = 0;
  let isDropdownOpen = false;

  // Sepet ikonunun konumunu al
  const cartButtonRect = cartButton.getBoundingClientRect();

  // Dropdown menüyü sepet ikonunun altına konumlandır
  cartDropdown.style.top = cartButtonRect.bottom + "px";
  cartDropdown.style.left = cartButtonRect.left + "px";

  // Sepet ikonuna tıklandığında dropdown menüyü aç/kapat
  cartButton.addEventListener("click", () => {
    if (!isDropdownOpen) {
      cartDropdown.style.display = "block";
      isDropdownOpen = true;
    } else {
      cartDropdown.style.display = "none";
      isDropdownOpen = false;
    }
  });

  // Ürün ekleme fonksiyonu
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const menuItem = button.parentElement;
      const itemName = menuItem.querySelector("h2").textContent;
      const itemPrice = menuItem.querySelector("p").textContent;

      cart.push({ name: itemName, price: parseFloat(itemPrice) });
      updateCart();
    });
  });

  // Sepet güncelleme fonksiyonu
  function updateCart() {
    cartItems.innerHTML = "";
    totalPrice = 0;

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name}: ${item.price} TL`;
      cartItems.appendChild(li);
      totalPrice += item.price;
    });

    cartButton.setAttribute("data-count", cart.length);
    totalPriceElement.textContent = `Toplam: ${totalPrice} TL`;
  }

  // İlk yüklemede sepeti gizle
  cartDropdown.style.display = "none";
});
