let imag = document.querySelector('.img');

window.addEventListener('scroll', function () {
  let y = window.scrollY;

  imag.style.transform = "translateY(" + -y * 0.25+"px)";
})