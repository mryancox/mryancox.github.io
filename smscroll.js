const navbarMenu = document.querySelector(".nav_bar");
const navbarLinks = document.querySelectorAll(".nav_bar a");
const mobileMenuLinks = document.querySelectorAll(".overlay a");

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));
mobileMenuLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick(event) {
	smoothScroll(event);
	if (navbarMenu.classList.contains("open")) {
		navbarToggler.click();
	}
}

function smoothScroll(event) {
	event.preventDefault();
	const targetId = event.currentTarget.getAttribute("href");
	console.log(targetId);
	const targetPosition = document.querySelector(targetId).offsetTop;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	const duration = 1000;
	let start = null;

	window.requestAnimationFrame(step);

	function step(timestamp) {
		if (!start) start = timestamp;
		const progress = timestamp - start;
		window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
		if (progress < duration) window.requestAnimationFrame(step);
	}
}

function easeInOutCubic(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t + b;
	t -= 2;
	return c / 2 * (t * t * t + 2) + b;
};