const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
debounce();

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}
/*
function Modal(){

 document.getElementById('imagem').addEventListener('click', function(e){
 e.target.classList.add('active')
  })

}Modal()
*/


 const Modal = {
                open(){
                    // Abrir modal
                    // Adicionar a class active ao modal
                    document.querySelector('.imagem')
                        .classList
                        .add('active')

                },
                close(){
                    // fechar o modal
                    // remover a class active do modal
                    document
                        .querySelector('.imagem')
                        .classList
                        .remove('active')
                }
            }