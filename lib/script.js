'use strict'

const DOC = document;
// const MAIN = DOC.body.getElementsByTagName('main');
const CART = [];

class Product {
    constructor(productType, productName, author, price, img, about) {
        this.productType = productType,
            this.productName = productName,
            this.author = author,
            this.price = price,
            this.img = img,
            this.about = about
    }
}

let products = [
    new Product("Книга", "Новый год в домике Мышонка", "Зенькова А.", 2251, "img/1.jpg",
        `Потри пальчиком изображение и понюхай страницу.
        Эта книга не простая, а волшебная! Вы можете не только послушать сказку, увидеть её героев на картинках, но и почувствовать запах сказки. Ведь в этой замечательной книжке есть ароматные странички. Добро пожаловать в ароматную сказку!
        Читай сказку, рассматривай картинки и вместе с мышонком наслаждайся ароматами торта, мёда, хвои, шоколада, марципана, кедра, конфет, пряников, кокоса, ананаса, лимона и мандарина. Для этого надо просто потереть пальчиком самые большие картинки.
        Для дошкольного возраста.`),
    new Product("Книга", "Маленький Единорог", "Сукгоева А.", 2251, "img/2.jpg",
        `Маленький единорог Лучик вместе со своими друзьями отправился на поиски волшебника фламинго, чтобы попросить его вызвать долгожданный дождь. А тот, читая заклинание, случайно стёр радугу. Без неё не будет больше ни дождя, ни солнца!
        Смогут ли друзья найти все необходимые цвета, чтобы вернуть радугу на небо? Прочитай сказку и узнаешь.
        А если ты потрёшь пальчиком самые большие картинки, то почувствуешь запахи жасмина, лаванды, сена, лимонада, ландышей, земляники, розы, апельсина, банана, мяты, фиалок и яблок.
        Для детей дошкольного возраста.`),
    new Product("Книга", "Лисенок Лютер и летнее представление", "Роулинсон Д.", 684, "img/3.jpg",
        `Сказка «Лисёнок Лютер и летнее представление» Джулии Роулинсон с иллюстрациями Тифани Бик — третья книга о милом лисёнке и его лесных друзьях.
        Книжка будто рукодельная, нарисованная в духе импрессионизма специально для вашего маленького созерцателя.
        Очень нежный рассказ о дружбе и творчестве идеален для чтения перед сном, тихой дискуссии, для развивающих занятий с малышами.`),
    new Product("Книга", "Маленький принц", "де Сент-Экзюпери А.", 2534, "img/4.jpg",
        `Самое известное произведение Антуана де Сент-Экзюпери — и самая необычная книга, которая оживает благодаря 3D-объёмным панорамам на каждом развороте.
        Эта книга на все времена. Благодаря новым возможностям иллюстрирования она найдет своих почитателей среди людей любого возраста.
        Книга будет великолепным подарком и для тех, кто знает "Маленького Принца" почти наизусть, и для тех, кто впервые откроет для себя эту мудрую философскую причту о самом важном: любви, верности, красоте, понимании.`),
    new Product("Книга", "Высокий - низкий", "МОЗАИКА kids издательств", 96, "img/5.jpg",
        `Книжка с наклейками для детей от 3-х лет.
        Занятия с наклейками не только приносят ребенку удовольствие и радость, но и способствуют развитию речи, интеллекта, мелкой моторики, координации движений, расширяют представления об окружающем мире.
        С помощью интересных заданий эта книга познакомит детей с понятиями «сухой – мокрый», «высоко – низко», «вверху – внизу», «один – много».
        Например, нужно найти и приклеить сухих лягушек на траву, а мокрых – в речку; груши – на дерево, а улиток – на полянку; одну земляничку – рядом с мышкой, много земляники – рядом с муравьями.
        Доступные обучающие задания и яркие иллюстрации обязательно понравятся Вашему ребенку.`),
    new Product("Книга", "Котенок Шмяк и лунный кот", "Скоттон Р.", 344, "img/6.jpg",
        `Однажды Шмяк и Пряник поспорили один был уверен, что с Луны на них смотрит лунный кот, а второй доказывал, что это кратеры от метеоритов.
        Кто прав? И что сделает мышонок Сырник в этой непростой ситуации?`)
];

document.addEventListener("DOMContentLoaded", showMainContent());

function showMainContent() {
    let mContent = DOC.getElementById("mainContent");
    mContent.innerHTML = "";
    DOC.getElementById("productContent").setAttribute("hidden", "");
    DOC.getElementById("cartContent").setAttribute("hidden", "");

    DOC.querySelector("title").innerHTML = "БФТ - BookShop";
    mainTitle.innerHTML = "BookShop";

    for (let i = 0; i < products.length; i++) {
        createNewProductCard(i, products[i].productType, products[i].productName, products[i].author, products[i].price, products[i].img);
    }

    mContent.removeAttribute("hidden");
}

function createNewProductCard(index, productType, productName, author, price, img) {
    let newProduct = DOC.createElement("div");
    newProduct.setAttribute("class", "col-md-6");
    newProduct.innerHTML = `<div
                                class="row g-0 border rounded overflow-hidden flex-md-row mb-4 product-card h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column">
                                    <div class="row-auto d-flex flex-column" style="height: 250px;">
                                        <div class="mb-auto">
                                            <strong class="d-inline-block mb-2 text-primary">${productType}</strong>
                                            <h3 class="mb-0">${productName}</h3>
                                            <div class="mb-1 text-muted">${author}</div>
    
                                            <a href="#" class="stretched-link" onclick="showProductContent(${index})">О товаре</a>
                                        </div>
                                        <div class="">${price} ₽</div>
                                    </div>
                                </div>
    
                                <div class="col-auto d-none d-lg-block">
                                    <img class="bd-placeholder-img" src="${img}" alt="${productName}" width="300"
                                        height="300">
                                </div>
                            </div>`;

    mainContent.append(newProduct);
}

function showProductContent(index) {
    DOC.getElementById("mainContent").setAttribute("hidden", "");
    DOC.getElementById("cartContent").setAttribute("hidden", "");

    DOC.querySelector("title").innerHTML = "БФТ - О товаре";
    mainTitle.innerHTML = "О товаре";

    let p = products[index];
    createProductContent(index, p.productType, p.productName, p.author, p.price, p.img, p.about);

    DOC.getElementById("productContent").removeAttribute("hidden");
}

function createProductContent(index, productType, productName, author, price, img, about) {
    productContent.innerHTML = `<div
                                class="row g-0 border rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column">
                                    <div class="row-auto d-flex flex-column" style="height: 300px;">
                                        <div class="mb-auto">
                                            <strong class="d-inline-block mb-2 text-primary">${productType}</strong>
                                            <h3 class="mb-0">${productName}</h3>
                                            <div class="mb-1 text-muted">${author}</div>
                                            <div class="mb-1">${about}</div>
                                        </div>
                                        
                                        <div class="mb-auto d-flex justify-content-between mt-3">
                                            <div class="">${price} ₽</div>
                                            <button type="button" class="btn btn-primary" onclick="addInCart(${index})">Добавить в
                                                корзину</button>
                                            <button type="button" class="btn btn-secondary" onclick="showMainContent()">Close</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-auto d-none d-lg-block">
                                    <img class="bd-placeholder-img" src="${img}" alt="${productName}" width="350" height="350">
                                </div>
                            </div>`;
}

function showCartContent() {
    DOC.getElementById("mainContent").setAttribute("hidden", "");
    DOC.getElementById("productContent").setAttribute("hidden", "");

    DOC.querySelector("title").innerHTML = "БФТ - Корзина";
    mainTitle.innerHTML = "Корзина";

    swapEmptyOrNotEmptyCart();

    DOC.getElementById("cartContent").removeAttribute("hidden");
}

function addProductInCart(index, productName, price) {
    let newProduct = DOC.createElement("div");
    newProduct.setAttribute("class", "row");
    newProduct.setAttribute("id", `${index}`);
    newProduct.innerHTML = `<div class="col border bg-light-dark">
                                <a href="#" onclick=removeFromCart(${index})>Удалить</a>
                            </div>
                            <div class="col-6 border bg-light-dark">
                                ${productName}
                            </div>
                            <div class="col border bg-light-dark">
                                ${price}
                            </div>
                            <div class="col border bg-light-dark">
                                1
                            </div>
                            <div class="col border bg-light-dark">
                                ${price}
                            </div>`;

    bodyCartContent.append(newProduct);
}

function addInCart(index) {
    // if (CART == null || CART.length == 0) {
    //     CART.push(products[index]);
    //     addProductInCart(index, products[index].productName, products[index].price);
    // }
    CART.push(products[index]);
    addProductInCart(index, products[index].productName, products[index].price);
}

function removeFromCart(index) {
    let productToDelete = products[index];

    let indx = CART.indexOf(productToDelete);
    if (indx > -1) {
        CART.splice(indx, 1);
    }

    swapEmptyOrNotEmptyCart();

    let cartElem = document.getElementById(index);
    cartElem.remove();
}

function swapEmptyOrNotEmptyCart() {
    if (CART == null || CART.length == 0) {
        notEmptyCartContent.setAttribute("hidden", "");
        emptyCartContent.removeAttribute("hidden");
    } else {
        emptyCartContent.setAttribute("hidden", "");
        notEmptyCartContent.removeAttribute("hidden");
    }
}