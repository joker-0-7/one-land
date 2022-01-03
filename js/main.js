let mnue = document.getElementById("mnue");
let show = document.getElementById("show");
let span = document.getElementById("span");
let link = document.getElementById("m-1");
let scor = document.querySelectorAll("li a");
let head = document.getElementById("head");

show.addEventListener("click", () => {
	mnue.style.display = "flex";
	link.style.display = "block";
});
if (document.body.scrollWidth <= 1400) {
	mnue.style.display = "flex";
	link.style.display = "none";
	scor.forEach((e) => {
		e.addEventListener("click", () => {
			mnue.style.display = "none";
			link.style.display = "none";
		});
	});
	span.addEventListener("click", () => {
		mnue.style.display = "none";
		link.style.display = "none";
	});
}
window.onscroll = function () {
	if (window.scrollY >= 150) {
		head.style.backgroundColor = "#333";
	} else {
		head.style.backgroundColor = "transparent";
	}
};
