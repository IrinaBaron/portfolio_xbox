document.addEventListener('DOMContentLoaded', (e) => {


  const swiper = new Swiper('.myswiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  const swiper1 = new Swiper('.swiper2', {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,

    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      scale: 1,
      // stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  });

  // -----------------------drop-menu--------------------

  let dropS = document.querySelectorAll('.drop');
  let listDrop = document.querySelectorAll('.drop__list');

  function searchShow() {
    for(let i = 0; i < dropS.length; i++) {
      
      if(dropS[i].classList.contains('show')) {
        dropS[i].classList.remove('show');
        listDrop[i].classList.remove('show');
      }
    }
    // return
  }

  document.addEventListener('click', (e) => {
    // console.log(e.target)
    if (!e.target.closest(['.drop', '.drop__list', '.drop__item'])) {
      console.log('ok');
      // dropS.forEach
      searchShow();
    }

    // if(e.target.closest('.show')) {
    //   console.log('show')
    //   document.querySelector('.drop').classList.remove('show');
    //   document.querySelector('.drop__list').classList.remove('show');
    // }
  })
 
  dropS.forEach(drop => {
    
    drop.addEventListener('click', (e) => {
      
      // if(e.target.closest('.show')){
      //   console.log(e.target)
      //   e.target.classList.remove('show');
      //   e.target.nextElementSibling.classList.remove('show');
      // }

      if(!e.target.closest('.show')) {
        console.log('show')
        console.log(e.target)
        searchShow();
        e.target.classList.toggle('show');
        e.target.nextElementSibling.classList.toggle('show');
        
      } 
      
     
      
    })
    return
  })



  // let elems = document.querySelectorAll('.team__item');
  // let names = document.querySelectorAll('.team__wrap');

  // elems.forEach(elem => {
  //   elem.addEventListener('click', (e) => {
  //     elem.classList.toggle('active');

  //   })
  // })

  // document.addEventListener('click', (e) => {
  //   // console.log(e.target)
  //   if (!e.target.matches('.team__img')) {
  //     elems.forEach(elem => {
  //       elem.classList.remove('active');
  //     })
  //   }

  //   if (e.target.closest('.team__name')) {
  //     let parent = e.target.parentElement;
  //     parent.parentElement.classList.toggle('active')
  //   }

  //   if (!e.target.closest('.contacts')) {
  //     document.querySelector('.contacts__more').classList.remove('show')
  //   }

  // })

  // document.addEventListener('dblclick', (e) => {
  //   if (e.target.closest('.contacts__list')) {
  //     document.querySelector('.contacts__more').classList.remove('show')
  //   }
  // })


  // document.querySelector('.contacts__btn').addEventListener('click', (e) => {
  //   e.preventDefault();
  //   document.querySelector('.contacts__more').classList.toggle('show')
  // })

  // // -----------burger-------------

  document.querySelector('.header-burger').addEventListener('click', () => {
    document.querySelector('.header__item').classList.remove('active');
    document.body.classList.toggle('stop-scrolling');
    document.querySelector('.header-burger').classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('active');
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
