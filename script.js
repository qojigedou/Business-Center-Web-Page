

const mobileView = document.querySelector('.mobile-navigation ul');

document.querySelector('.mobile-navigation i').addEventListener('click', ()=>{
    mobileView.classList.contains('show') ? mobileView.remove('show') : mobileView.addEventListener('show')
});

ScrollReveal().reveal('skyscrip-row');