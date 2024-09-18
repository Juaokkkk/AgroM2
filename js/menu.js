const header = document.querySelector('header');
document.querySelector('.buttons-container').onclick = () => header.dataset.ativo = +!~~header.dataset.ativo;