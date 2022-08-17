const humb = document.querySelector('.humberger');
const span1 = document.querySelector('.humberger span:nth-child(1)');
const span2 = document.querySelector('.humberger span:nth-child(2)');
const span3 = document.querySelector('.humberger span:nth-child(3)');
const uli = document.querySelector('.menu ');
const panuk = document.querySelectorAll('.menu-li li');
const menu = document.querySelector('.menu-li');
panuk.forEach((a) => {
  a.addEventListener('click', () => {
    uli.classList.remove('aktif');
    span1.classList.toggle('aktif');
    span2.classList.toggle('aktif');
    span3.classList.toggle('aktif');
  });
});

humb.addEventListener('click', () => {
  span1.classList.toggle('aktif');
  span2.classList.toggle('aktif');
  span3.classList.toggle('aktif');
  uli.classList.toggle('aktif');
});
