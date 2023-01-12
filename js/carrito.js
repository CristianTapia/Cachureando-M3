// Agregar productos al carrito
let cantidad = 0;

const shoppingCartItemContainer = document.querySelector(".offcanvas-body");

const btnCarrito = document.querySelectorAll(".buy-now");

btnCarrito.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", addToCardClicked);
});

function addToCardClicked(event) {
    const button = event.target;
    const item = button.closest(".product")
    const itemTitle = item.querySelector(".item-title").textContent
    const itemPrice = item.querySelector(".price-sale").textContent
    const itemImg = item.querySelector(".img-fluid").src;
  addItemToShoppingCart(itemTitle, itemPrice, itemImg);
  cantidad++;
  
  updateItemsTotal();
  //updateCartTotal();
}

// Agregar items a off canvas
function addItemToShoppingCart (itemTitle, itemPrice, itemImg) {
  const shoppingCartNow = document.createElement("div");
  shoppingCartNow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("offcanvas-body")[0];
  console.log(cartItems);
  var cartItemTitles = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemTitles.length; i++) {
    console.log(cartItemTitles[i].innerText);
    if (cartItemTitles[i].innerText == itemTitle) {
      alert("El producto ya se encuentra en el carro");
      return;
    }
  }
    const shoppingCartContent = `
    <div class="card shadowrounded-3 mb-4">
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="${itemImg}">
        <span class="cart-item-title">${itemTitle}</span>
      </div>
      <span class="cart-price cart-column">${itemPrice}</span>
      <div class="row">
      <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      </div>
      <div class="delete col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
      </div>
      </div>
    </div>
    `;
    shoppingCartNow.innerHTML = shoppingCartContent;
    shoppingCartItemContainer.append(shoppingCartNow);
    shoppingCartNow.innerHTML = shoppingCartContent;

    shoppingCartNow.querySelector(".delete").addEventListener("click", removeShoppingCartItem)
    shoppingCartNow.querySelector(".cart-quantity-input").addEventListener("change", quantityChanged)
}

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
  buttonClicked.closest(".card").remove();
  updateItemsTotal();
  updateCartTotal();
}

function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
}


function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("offcanvas-body")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  //document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}

function updateItemsTotal() {
  var cartItemContainer = document.getElementsByClassName("offcanvas-body")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  console.log(cartRows);
  var total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
    console.log(quantityElement);
    var quantity = quantityElement.value;
    var total = total + parseInt(quantity);
  }

  document.getElementById('id_compras').innerHTML = '<span class="icon-shopping_cart" ></span>[' + total + ']';
}