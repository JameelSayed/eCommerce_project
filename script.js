const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove("active");
    })
}

//read-more-contaier is .blog-box and his .container is my .blog-details

const parentContainer = document.querySelector('.blog-details');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ?
    "Read Less..." : "Read More...";
})