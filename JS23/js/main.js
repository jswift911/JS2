const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject() -> let xhr = new ActiveXObject() // IE7-
//     xhr.open('GET', url, true);
//
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('error')
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send()
// };

let getRequest = (url, cb) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    reject(console.log('error'));
                } else {
                    resolve(cb(xhr.responseText));
                }
            }
        };
        xhr.send();
    })
};


class ProductsList {
    constructor() {
        this.goods = [];
        this.allProducts = [];
        this.init();
    }

    // init(){
    //         this._getProducts();
    // }
    init() {
        this._fetchProducts(() => {
            this.render();
        })
    };

    // _getProducts(){
    //     fetch(`${API}/catalogData.json`)
    //         .then(result => result.json())
    //         .then(data => {
    //             this.goods = [...data];
    //             this.render();
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         });
    // }

    _fetchProducts(cb) {
        getRequest(`${API}/catalogData.json`, (data) => {
            this.goods = JSON.parse(data);
            console.log(this.goods);
            cb()
        })
    };

    // fetchProducts(){
    //     this.goods = [
    //         {title: 'Notebook', price: 2000},
    //         {title: 'Mouse', price: 20},
    //         {title: 'Keyboard', price: 48},
    //         {title: 'Gamepad', price: 63},
    //         {title: 'Chair', price: 200},
    //     ];
    // }
    render() {
        const block = document.querySelector('.products');
        this.goods.forEach(product => {
            const prod = new Product(product);
            this.allProducts.push(prod);
            block.insertAdjacentHTML('beforeend', prod.render())
        })
    }

    sumPrice() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0)
    }

}

class Product {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id_product = product.id_product;
        this.img = img
    }

    render() {
        return `<div class="product-item">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3 class="prodName">${this.product_name}</h3>
                        <p class="prodPrice">${this.price} $</p>
                        <button class="buy-btn" data-id="${this.id_product}">Купить</button>
                    </div>
                </div>`
    }
}


let products = new ProductsList();
// console.log(products.sumPrice());

// const renderProduct = (title = 'Product', price, img = 'https://placehold.it/200x150') => {
//     return `<div class="product-item">
//                 <img src="${img}" alt="Some img">
//                 <div class="desc">
//                     <h3>${title}</h3>
//                     <p>${price} $</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//             </div>`
// };
//
// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item.title, item.price));
//     // document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');
//
//     for (let product of productsList){
//         document.querySelector('.products').insertAdjacentHTML('beforeend', product);
//     }
// };
//
// renderPage(products);

let btnCart = document.querySelector('.btn-cart');
btnCart.addEventListener('click', openCart);

function openCart() {
    let openCart = document.querySelector('.cart-window');
    if (openCart.style.display === 'none') {
        openCart.style.display = 'flex';
    } else {
        openCart.style.display = 'none';
    }
    getCartProdAndPrice();
}


function getCartProdAndPrice() {
    let inCartProd = document.querySelector('.cart-in-prod');
    inCartProd.innerText = document.querySelector('.prodName').innerText;
    let inCartPrice = document.querySelector('.cart-in-price');
    inCartPrice.innerText = document.querySelector('.prodPrice').innerText;
}

