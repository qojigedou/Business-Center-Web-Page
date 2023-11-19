

const mobileView = document.querySelector('.mobile-navigation ul');

document.querySelector('.mobile-navigation i').addEventListener('click', ()=>{
    mobileView.classList.contains('show') ? mobileView.classList.remove('show') : mobileView.classList.add('show')
});

ScrollReveal().reveal('skyscrip-row');