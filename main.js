const btn = document.getElementsByClassName('menu__link');
const content = document.getElementsByClassName('content__text');
console.log(btn, content);

[...btn].forEach((item) => {
    item.addEventListener('click', function() {
        event.preventDefault();
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('href');
        let currentTab = document.querySelector(tabId);

        [...btn].forEach((item) => {
            item.classList.remove('active');
        });

        [...content].forEach((item) => {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});