const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const hero = document.querySelector('#hero');


// button.addEventListener("click", () => {
//   path.classList.toggle("svgDay");
// });

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	main.classList.toggle("blur");
	footer.classList.toggle("blur");
	hero.classList.toggle("blur")
}

// window.addEventListener('resize', function() {
//   const maxWidth = 769;
//   if (window.innerWidth > maxWidth) {
//   hamburger.classList.remove('active');
// 	navMenu.classList.remove('active');
// }});

// POINTLESS AH FUNC BORED WRITING CSS AND HTML :(
//function upperCaseHeader() {
// 	const navItems = document.querySelectorAll(".nav-item");
// 	navItems.forEach(navItem => navItem.textContent = navItem.textContent.toUpperCase())
// }

// upperCaseHeader()