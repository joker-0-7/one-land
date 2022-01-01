// let head = document.getElementById("head");
// window.onscroll = () => {
// 	head.style.backgroundColor = "#333333";
// 	head.style.height = "60px";
// 	head.style.transition = "0.6s";
// };
let mnue = document.getElementById("mnue");
let show = document.getElementById("show");
let span = document.getElementById("span");
let link = document.getElementById("m-1");
let scor = document.querySelectorAll("li a");
show.addEventListener("click", () => {
	mnue.style.display = "flex";
	link.style.display = "block";
});
span.addEventListener("click", () => {
	mnue.style.display = "none";
	link.style.display = "none";
});
scor.forEach((e) => {
	e.addEventListener("click", () => {
		mnue.style.display = "none";
		link.style.display = "none";
	});
});
