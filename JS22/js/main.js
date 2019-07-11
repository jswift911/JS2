class ProductsList {
    constructor() {
        this.products = [];
        this.init();
    }

    init() {
        this.fetchProducts();
        this.render();
    }

    fetchProducts() {
        this.products = [
            {title: 'Notebook', price: 2000},
            {title: 'Mouse', price: 20},
            {title: 'Keyboard', price: 48},
            {title: 'Gamepad', price: 63},
            {title: 'Chair', price: 200},
        ];
    }

    render() {
        const block = document.querySelector('.products');
        this.products.forEach(product => {
            const prod = new Product(product);
            block.insertAdjacentHTML('beforeend', prod.render())
        })
    }

    /**
     * Функция возвращает общую сумму стоимости всех товаров
     * @returns {number} - сумма всех товаров
     */
    static sumProducts() {
        let sumProd = 0;
        products.products.forEach((el) => sumProd += el.price);
        return sumProd;
    }
}


class Product {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.img = img
    }

    render() {
        return `<div class="product-item">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>`
    }
}

let products = new ProductsList();
// Проверка суммы всех товаров
console.log(ProductsList.sumProducts());

//Пустые классы для корзины и элемента корзины. buy - добавить товар, remove - удалить товар, goods - товары.
class CartGoods {
    constructor() {
        this.goods = [];
        this.buy = [];
        this.remove = [];
    }
}

class CartElem {
    constructor() {
        this.elemBuy = [];
        this.elemRemove = [];
    }
}


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


