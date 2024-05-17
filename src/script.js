const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const hero = document.querySelector('#hero');
const quickConnect = document.querySelector(".quick-connect");


// button.addEventListener("click", () => {
//   path.classList.toggle("svgDay");
// });

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");

	const blurElements = [main, footer, hero, quickConnect];
	
	blurElements.forEach(element => {
	element.classList.toggle("blur");
});
}