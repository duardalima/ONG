
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

new Swiper('.card-wrapper.swiper', {
    loop: true,
    spaceBetween: 30,
  
    // Paginação
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Botões de navegação
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Configuração de breakpoints para responsividade
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 25, // Um slide visível em telas pequenas
      },
      768: {
        slidesPerView: 2, 
        spaceBetween: 20,// Dois slides visíveis em tablets
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15, // Três slides visíveis em desktops
      },
    },
  });