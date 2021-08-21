let numberPrincipal = document.querySelector('.numero').textContent
document.querySelector('.more').addEventListener('click', (event) => {
    event.preventDefault();
    numberPrincipal++
    document.querySelector('.numberPrincipal').textContent = numberPrincipal;
})

document.querySelector('.less').addEventListener('click', (event) => {
    event.preventDefault();
    numberPrincipal--
    document.querySelector('.numberPrincipal').textContent = numberPrincipal;
})