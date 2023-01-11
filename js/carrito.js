
const btnCarrito = document.querySelectorAll(".buy-now");

console.log(btnCarrito)
console.log("hola")

btnCarrito.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", addToCardClicked);
});

const shoppingCartItemContainer = document.querySelector(".offcanvas-body");

function addToCardClicked(event) {
    const button = event.target;
    const item = button.closest(".product")
    const itemTitle = item.querySelector(".item-title").textContent
    const itemPrice = item.querySelector(".price-sale").textContent
    const itemImg = item.querySelector(".img-fluid").src;
    addItemToShoppingCart (itemTitle, itemPrice, itemImg);
}

function addItemToShoppingCart (itemTitle, itemPrice, itemImg) {
    const shoppingCartNow = document.createElement("div");
    const shoppingCartContent = `
    <!-- Product 1 -->
    <div class="card shadowrounded-3 mb-4">
      <div class="card-body p-4">
        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-md-2 col-lg-2 col-xl-2">
            <img src=${itemImg} class="img-fluid rounded-3" alt="Cotton T-shirt">
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
            <p class="lead fw-normal mb-2">${itemTitle}</p>
            <p>Características</p>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button class="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
              <i class="fas fa-minus"></i>
            </button>

            <input id="form1" min="0" name="quantity" value="2" type="number"
              class="form-control form-control-sm" />

            <button class="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 class="mb-0">${itemPrice}</h5>
          </div>
          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
          </div>
        </div>
      </div>
    </div>
    `;
    shoppingCartNow.innerHTML = shoppingCartContent;
    shoppingCartItemContainer.append(shoppingCartNow);
}



