const burger = document.querySelector('.burger');
const ul = document.querySelector('ul');
const tableau_li = document.querySelectorAll('nav ul li');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  ul.classList.toggle('active_menu');
});

for (let i = 0; i < tableau_li.length; i++) {
  tableau_li[i].addEventListener('click', () => {
    burger.classList.remove('active');
    ul.classList.remove('active_menu');
  })
}

/*1er slider*/



function my_slider(id) {
  var avant = document.querySelector("#" + id + " > .avant");
  var apres = document.querySelector("#" + id + " > .apres");
  var slides = document.querySelectorAll("#" + id + " .slide");

  var index = 0;


  function resetSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
  }


  avant.addEventListener("click", (e) => {
    if (index == 0) {
      e.preventDefault();
    } else {
      index--;
      resetSlides();
      slides[index].classList.add("active");
    }
  });

  apres.addEventListener("click", (e) => {
    if (index == slides.length - 1) {
      e.preventDefault();
    } else {
      index++;
      resetSlides();
      slides[index].classList.add("active");
    }
  });
}

my_slider('sec_comp1');
my_slider('second');
my_slider('sec_comp3');