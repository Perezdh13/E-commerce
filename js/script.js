const divisa = '€';
const DOMnew = document.querySelector('#new');
const DOMproducts = document.querySelector('#products');
const DOMexclusive = document.querySelector('#exclusive');
const DOMtotalItem = document.querySelectorAll('.totalItem');
const DOMtotal = document.querySelectorAll('#total');

DOMtotalItem.forEach (boton => {
    boton.innerHTML += totalItem2()
})

DOMtotal.forEach(param => {
    param.innerHTML += totalCart() + '€';
})


function renderIndex() {

    var news = products.filter(item => item.category == "New");
    var product = products.filter(item => item.category == "Products");
    var exclusive = products.filter(item => item.category == "Exclusive");

    news.forEach((item) => { DOMnew.appendChild(printNew(item)) });
    product.forEach((item) => { DOMproducts.appendChild(printNew(item)) });
    exclusive.forEach((item) => { DOMexclusive.appendChild(printNew(item)) });
};

function printNew(item) {

    const myProduct = document.createElement("div");
    myProduct.id = "box";

    const myProductTitle = document.createElement('h2');
    myProductTitle.innerText = item.name;
    myProductTitle.id = 'product-title';

    const myProductImage = document.createElement("img");
    myProductImage.src = item.image;
    myProductImage.id = 'product-image';

    const myProductDescription = document.createElement('p');
    myProductDescription.innerText = item.description;
    myProductDescription.id = 'product-description';

    const myProductPrice = document.createElement("p");
    myProductPrice.innerText = item.price + divisa;
    myProductPrice.id = 'product-price';

    const myProductButton = document.createElement("button");
    myProductButton.innerHTML = "Añadir"
    myProductButton.id = 'product-button';
    myProductButton.setAttribute('marker', item.id);
    myProductButton.addEventListener('click', shoppingButton);


    myProduct.appendChild(myProductTitle);
    myProduct.appendChild(myProductImage);
    myProduct.appendChild(myProductDescription);
    myProduct.appendChild(myProductPrice);
    myProduct.appendChild(myProductButton);
    return myProduct
};

function shoppingButton(event) {

    let itemMarker = event.target.getAttribute('marker')
    let storage = products.find(element => element.id.toString() == itemMarker )
 
    const exist = cart.some(product => product.id === storage.id);
    if (exist) {
        const pro = cart.map(product => {
            if (product.id === storage.id) {
                product.quantity++;
                return product;
            } else {
                return product
            }
        });
        cart = [...pro]

    } else {
        cart.push(storage)
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    totalItem2()
    location.reload()
};



renderIndex();


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}