window.onload = function webdevs_fn() {
    let toggle = document.querySelector('#nav .toggle-btn');
    let collapse = document.querySelector('#nav .collapse');

    toggle.addEventListener('click', function (event) {
        collapse.classList.toggle('active');
    });

    //masonry js
    let grid = document.querySelector(
        '#site-main .recent-work-area .images-flex',
    );
    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 100,
        fitWidth: true,
    });
};

//rellax js
var rellax = new Rellax('.rellax', {
    center: true,
});
