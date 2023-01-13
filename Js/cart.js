let cart = JSON.parse(localStorage.getItem('cart')) || []
let totalItem = totalItem2();
const DOMcart = document.querySelector('.main-cart');

const DOMbuttonDeleteCart = document.querySelector('.deleteCart');

DOMbuttonDeleteCart.addEventListener('click', clearCart)

//const DOMtotalItem = document.querySelectorAll('.totalItem')

//DOMtotalItem.innerHTML += totalItem;

function printCart(){
    
    if (cart !== null){
    cart.forEach((item) => {
            
        var totalProduct = item.quantity*item.price;

            let print = document.createElement('tr'); 
            
            print.innerHTML = `
                <td style= "height: 15vh">
                    <img src="${item.image}" style="height: 100%">
                </td>
                <td>
                    <h5>${item.name}</h5>
                    <button id="delete-button" data-id="${item.id}">borrar</button>
                </td>
                <td>
                <p>${item.price}€</p>
                </td>
                <td class="itemQuantity">
                    <button>-</button>
                    <p>${item.quantity}</p>
                    <button>+</button>
                </td>
                <td>
                    <p>${totalProduct} €</p>
                </td>
            
            `;
        
        DOMcart.appendChild(print);
    })
    }
}

function reloadCart (){
    cart = JSON.parse(localStorage.getItem('cart'))
}

function clearCart () {
    localStorage.clear()
    reloadCart ()
    printCart()
    totalItem2()
    totalCart()
    location.reload()
}
printCart()

const deletebutton = document.querySelectorAll('#delete-button')

deletebutton.forEach (boton => {
    boton.addEventListener("click", deleteProduct)
})

// DOMtotalItem.forEach (boton => {
//     boton.innerHTML += totalItem2()
// })

function deleteProduct(event){

    const productId = event.target.dataset.id; 
    console.info(productId)
    cart = cart.filter(prd => prd.id.toString() !== productId.toString());
    localStorage.setItem('cart',JSON.stringify(cart));
    printCart();
    location.reload()
    totalItem2()
    
}


function totalItem2 (){
    let sumatorio = 0 ;
    
    console.info(sumatorio)
    if (cart !== null){
        cart.forEach (item => {
            sumatorio += item.quantity
        });
    }
    return sumatorio
};


function totalCart() {
    var total = 0;
    if (cart !== null){
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity * cart[i].price;
    }
}
    return total;
}



const total = document.querySelector('#total');

total.innerHTML += totalCart() + '€';
