const DOMShopping = document.querySelector('.main-shopping')

function printshopping() {

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
                </td>
                <td>
                <p>${item.price}€</p>
                </td>
                <td class="itemQuantity">
                    <p>${item.quantity}</p>
                </td>
                <td>
                    <p>${totalProduct} €</p>
                </td>
            `;

            DOMShopping.appendChild(print);
        })
    }
    
}

printshopping()