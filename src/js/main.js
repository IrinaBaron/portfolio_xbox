document.addEventListener('DOMContentLoaded', (e) => {

  let elems = document.querySelectorAll('.team__item');
  let names = document.querySelectorAll('.team__wrap');

  elems.forEach(elem => {
    elem.addEventListener('click', (e) => {
      elem.classList.toggle('active');

    })
  })

  document.addEventListener('click', (e) => {
    // console.log(e.target)
    if (!e.target.matches('.team__img')) {
      elems.forEach(elem => {
        elem.classList.remove('active');
      })
    }

    if (e.target.closest('.team__name')) {
      let parent = e.target.parentElement;
      parent.parentElement.classList.toggle('active')
    }

    if (!e.target.closest('.contacts')) {
      document.querySelector('.contacts__more').classList.remove('show')
    }

  })

  document.addEventListener('dblclick', (e) => {
    if (e.target.closest('.contacts__list')) {
      document.querySelector('.contacts__more').classList.remove('show')
    }
  })

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  document.querySelector('.contacts__btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.contacts__more').classList.toggle('show')
  })

  // -----------burger-------------

  document.querySelector('.hero-burger').addEventListener('click', () => {
    document.querySelector('.hero-burger').classList.toggle('active');
    document.querySelector('.hero__nav').classList.toggle('active');
  })

  // ------------scroll--------------
  const btnScroll = document.querySelector('.btn__scroll');
  window.addEventListener('scroll', () => {
    let scrollNum = window.pageYOffset;
    console.log(scrollNum);

    if (scrollNum >= '100') {
      btnScroll.style.display = 'block';
      btnScroll.style.position = 'fixed';
      btnScroll.style.bottom = '80px';
      btnScroll.style.right = '40px';

    } else {
      btnScroll.style.display = 'none';
    }

  }, { passive: true })

  let links = document.querySelectorAll('.hero__link');

  links.forEach(link => {
    link.addEventListener('click', () => {
      window.scroll({ behavior: 'smooth' })
    })
  })

})
