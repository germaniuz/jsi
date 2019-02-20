window.addEventListener('DOMContentLoaded', () => {

const cartWrapper = document.querySelector('.cart__wrapper'),
    cart = document.querySelector('.cart'),
    close = document.querySelector('.cart__close'),
    open = document.querySelector('#cart'),
    goodsBtn = document.querySelectorAll('.goods__btn'),
    products = document.querySelectorAll('.goods__item'),
    confirm = document.querySelector('.confirm'),
    badge = document.querySelector('.nav__badge'),
    totalCost = document.querySelector('.cart__total > span'),
    titles = document.querySelectorAll('.goods__title');

function openCart() {
    cart.style.display = "block";
    document.querySelector('body').style.overflow = "hidden";
}

function closeCart() {
    cart.style.display = "none";
    document.querySelector('body').style.overflow = "";
}

open.addEventListener('click', openCart);
close.addEventListener('click', closeCart);

goodsBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        let item = products[i].cloneNode(true),
            trigger = item.querySelector('button'),
            removeBtn = document.createElement('div'),
            emptyText = cartWrapper.querySelector('.empty');

        trigger.remove();
        removeBtn.classList.add('goods__item-remove');
        removeBtn.innerHTML = '&times';
        item.appendChild(removeBtn);
        cartWrapper.appendChild(item);
        (emptyText) ? emptyText.remove() : '';
        calcGoods();
        showConfirm();
        calcTotal();
    });
});

function sliceTitle(arrTitles) {
    arrTitles.forEach((item) => {
        if (item.textContent.length < 70) {
            return;
        } else {
           const str = item.textContent.slice(0, 71) + '...';
           item.textContent = str;
        }
    });
}

sliceTitle(titles);

function showConfirm() {
    confirm.style.display = 'block';
    let counter = 100;
    const id = setInterval(frame, 10);

    function frame() {
        if (counter == 10) {
            clearInterval(id);
            confirm.style.display= 'none';
        } else {
            counter --;
            confirm.style.transform = `translateY(-${counter}px)`;
            confirm.style.opacity = `0.${counter}`;
        }
    }
}

function calcGoods() {
    const item = cartWrapper.querySelectorAll('.goods__item');
    badge.textContent = item.length;
}

function calcTotal() {
    prices = document.querySelectorAll('.cart__wrapper > .goods__item > .goods__price > span');
    let total = 0;
    prices.forEach((item) => {
        total += +item.textContent;
    });
    totalCost.textContent = total;
}

}); //DOMContentLoaded