// Agregar productos al carrito
var totalisimo = 0;
var total = 0;
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//const shoppingCartItemContainer = document.querySelector(".offcanvas-body");

function ready() {
  const btnCarrito = document.querySelectorAll(".buy-now");
  btnCarrito.forEach((addToCartButton) => {
      addToCartButton.addEventListener("click", addToCardClicked);
  });

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  /*remove items first part*/
  var removeCartItemButtons = document.getElementsByClassName("text-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeShoppingCartItem);
  }
 /*end*/
  // document
  //   .getElementsByClassName("btn-purchase")[0]
  //   .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  //alert("Gracias por su compra");
  //var cartItems = document.getElementsByClassName("offcanvas-body")[0];
  //while (cartItems.hasChildNodes()){
  //  cartItems.removeChild(cartItems.firstChild);
  //}
  //updateCartTotal();
  //updateItemsTotal();
}

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
      </div>
      `;

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

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
  updateItemsTotal();
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("offcanvas-body")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
    var price = parseFloat(priceElement.innerHTML.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + (price * quantity);
  }
  //total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total;
}

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