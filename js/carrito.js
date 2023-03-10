// Agregar productos al carrito
var totalisimo = 0;
var total = 0;
let formato = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP'
})
// Cargar página completa antes de ejecutar el código JS
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Código a ejecutar luego de que cargue la página
function ready() {
  const btnCarrito = document.querySelectorAll(".buy-now");
  btnCarrito.forEach((addToCartButton) => {
      addToCartButton.addEventListener("click", addToCardClicked);
  });

  // Cantidad de cada producto
  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // Eliminar productos del carro
  var removeCartItemButtons = document.getElementsByClassName("text-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeShoppingCartItem);
  }
}

// Agregar elementos al carro
function addToCardClicked(event) {
    const button = event.target;
    const item = button.closest(".product")
    const itemTitle = item.getElementsByClassName("item-title")[0].innerText;
    const itemPrice = item.getElementsByClassName("price-sale")[0].innerText;
    const itemImg = item.getElementsByClassName("img-fluid")[0].src;
  addItemToShoppingCart(itemTitle, itemPrice, itemImg);
  
  updateItemsTotal();
  updateCartTotal();
}

// Agregar items a off canvas
function addItemToShoppingCart (itemTitle, itemPrice, itemImg) {
    const shoppingCartNow = document.createElement("div");
    shoppingCartNow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName("offcanvas-body")[0];
    var cartItemTitles = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemTitles.length; i++) {
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
      </div>`;

      shoppingCartNow.innerHTML = shoppingCartContent;
      cartItems.append(shoppingCartNow);
      shoppingCartNow
      .getElementsByClassName("delete")[0]
      .addEventListener("click", removeShoppingCartItem);
      shoppingCartNow
      .getElementsByClassName("cart-quantity-input")[0]
      .addEventListener("change", quantityChanged);
}

function removeShoppingCartItem(event) {
  var buttonClicked = event.target;
    buttonClicked.closest(".cart-row").remove();
    updateItemsTotal();
    updateCartTotal();
}

// Cambio de cantidad
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
  updateItemsTotal();
}

// Actualizar subtotal carro
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("offcanvas-body")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
    var price = priceElement.innerHTML.replace("$", "");
    price = price.replace(".","");
    var quantity = quantityElement.value;
    total = total + (price * quantity);
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = formato.format(total);
  document.getElementById('subtotal').innerHTML = formato.format(total);
}

// Actualizar total carro
function updateItemsTotal() {
  var cartItemContainer = document.getElementsByClassName("offcanvas-body")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var totalisimo = 0;
  for (let i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
    var quantity = quantityElement.value;
    var totalisimo = totalisimo + parseInt(quantity);
  }
  document.getElementById('id_compras').innerHTML = '<span class="icon-shopping_cart" ></span>[' + totalisimo + ']';
} 