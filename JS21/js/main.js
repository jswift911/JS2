const products = [
    {title: 'Notebook', price: 2000},
    {title: 'Mouse', price: 20},
    {title: 'Keyboard', price: 48},
    {title: 'Gamepad', price: 63},
    {title: 'Chair', price: 200},
];


const renderProduct = (title='Название товара', price=1000) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
            </div>`
};

// join убирает запятую, запятая получается из-за того, что на выходе функции мы получаем коллекцию.
const renderPage = list => {
    const productList = list.map(item => renderProduct(item.title, item.price)).join(' ');
    document.querySelector('.products').innerHTML = productList;
};

renderPage(products);