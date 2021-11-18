const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const nav = $('.main-navigation')
window.addEventListener('scroll', e => {
    window.scrollY != 0 ? nav.classList.add('bg-white') : nav.classList.remove('bg-white')

})