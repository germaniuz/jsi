window.addEventListener('DOMContentLoaded', () => {

const cartWrapper = document.querySelector('.cart__wrapper'),
    cart = document.querySelector('.cart'),
    close = document.querySelector('.cart__close'),
    open = document.querySelector('#cart'),
    goodsBtn = document.querySelectorAll('.goods__btn'),
    products = document.querySelectorAll('.goods__item'),
    confirm = document.querySelector('.confirm'),
    badge = document.querySelector('.nav_badge'),
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
    });
});

}); //DOMContentLoaded