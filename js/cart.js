

let cart = JSON.parse(localStorage.getItem('cart')) || []
let totalItem = totalItem2();

const DOMcart = document.querySelector('.main-cart');
const DOMbuttonDeleteCart = document.querySelector('.deleteCart');


printCart()

const add = document.querySelectorAll(".add");
const subtract = document.querySelectorAll(".subtract");
const deletebutton = document.querySelectorAll('#delete-button');

DOMbuttonDeleteCart.addEventListener('click', clearCart);

add.forEach(button => {
    button.addEventListener("click", addAndDelete);
});
subtract.forEach(button => {
    button.addEventListener("click", addAndDelete);
});
deletebutton.forEach(boton => {
    boton.addEventListener("click", deleteProduct);
});

function printCart() {

    if (cart !== null) {
        cart.forEach((item) => {
            var totalProduct = item.quantity * item.price;
            let print = document.createElement('tr');
            print.innerHTML = `
                <td style= "height: 15vh">
                    <img src="${item.image}" style="height: 100%">
                </td>
                <td>
                    <h5>${item.name}</h5>
                    <button id="delete-button" data-id="${item.id}">Borrar</button>
                </td>
                <td>
                <p>${item.price}€</p>
                </td>
                <td class="itemQuantity">
                    <button class= "subtract" data-id= "${item.id}" data-type= "subtract">-</button>
                    <p>${item.quantity}</p>
                    <button class= "add" data-id= "${item.id}" data-type= "add">+</button>
                </td>
                <td>
                    <p>${totalProduct} €</p>
                </td>
            `;
            DOMcart.appendChild(print);
        })
    }
};

function reloadCart() {
    cart = JSON.parse(localStorage.getItem('cart'))
};

function clearCart() {
    localStorage.clear()
    reloadCart()
    printCart()
    totalItem2()
    totalCart()
    location.reload()
};

function deleteProduct(event) {

    const productId = event.target.dataset.id;
    cart = cart.filter(prd => prd.id.toString() !== productId.toString());
    localStorage.setItem('cart', JSON.stringify(cart));
    printCart();
    location.reload()
    totalItem2()
};

function totalItem2() {
    let sumatorio = 0;

    if (cart !== null) {
        cart.forEach(item => {
            sumatorio += item.quantity
        });
    }
    return sumatorio
};

function totalCart() {
    var total = 0;
    if (cart !== null) {
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].quantity * cart[i].price;
        }
    }
    return total;
};




function addAndDelete(event) {
    const productId = event.target.dataset.id;
    const order = event.target.dataset.type;

    if (order == "add") {
        cart.forEach(item => {
            if (item.id == productId) {
                item.quantity++
            }
        });
    }
    if (order == "subtract") {
        cart.forEach(item => {
            if (item.id == productId) { item.quantity-- }
            if (item.quantity == 0) { deleteProduct(event) }
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    location.reload()
};


