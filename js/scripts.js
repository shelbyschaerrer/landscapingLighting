// inject current year in footer
const currentYear = new Date()
document.querySelector('#year').textContent = currentYear.getFullYear()

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'slide',
    speed: 2000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    //autoplay
    autoplay: {
        delay: 5000,
    }
  })

  const hb = document.querySelector('#hamburgerBtn')

  hb.addEventListener('click', () => {
    document.querySelector('#primaryNav').classList.toggle('open')
  })