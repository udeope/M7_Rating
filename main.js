let rat = document.querySelectorAll('input[name=rating]');

document.addEventListener("click", function(event) {
  let targ = event.target.parentElement;
  if (!(targ && targ.classList.contains('rating'))) {
    rat.forEach(e => {
      if (e.checked) {
        e.checked = false;
      }
    });
  }
});