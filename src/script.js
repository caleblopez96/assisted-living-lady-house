const html = document.querySelector("html")
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const phoneInput = document.querySelector("#phone");


// button.addEventListener("click", () => {
//   path.classList.toggle("svgDay");
// });

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	html.classList.toggle("remove-scroll")
}

// form formatting

phoneInput.addEventListener("input", mobileNumberFormFormatting);

function mobileNumberFormFormatting(e) {
  let input = e.target.value.replace(/\D/g, ''); 

  let formattedInput = '';

  if(input.length > 0) {
    formattedInput += '('+ input.substring(0, 3);
  }

  if(input.length >= 4) {
    formattedInput += ')' + input.substring(3, 6);
  }

  if(input.length >= 7) {
    formattedInput += '-' + input.substring(6, 10);
  }

  e.target.value = formattedInput;
}
