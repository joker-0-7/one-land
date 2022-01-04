// Varibles
let mnue = document.getElementById("mnue");
let show = document.getElementById("show");
let span = document.getElementById("span");
let link = document.getElementById("m-1");
let scor = document.querySelectorAll("li a");
let head = document.getElementById("head");
let up = document.getElementsByClassName("up")[0];

window.onscroll = () => {
	if (window.scrollY >= 200) {// Varibles
let mnue = document.getElementById("mnue");
let show = document.getElementById("show");
let span = document.getElementById("span");
let link = document.getElementById("m-1");
let scor = document.querySelectorAll("li a");
let head = document.getElementById("head");
let up = document.getElementsByClassName("up")[0];

window.onscroll = () => {
	if (window.scrollY >= 200) {
		head.style.backgroundColor = "#333";

	} else {
		head.style.backgroundColor = "transparent";
	}
	if (window.scrollY >= 300) {
		up.classList.add("active");
	} else {
		up.classList.remove("active");
	}
};

show.addEventListener("click", () => {
	mnue.style.display = "flex";
	link.style.display = "block";
});
if (document.body.scrollWidth <= 1400) {
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
up.onclick = () => {
	window.scrollTo({
		top: 0,
		"behavior" :"smooth"
	});
};

		head.style.backgroundColor = "#333";
		up.classList.add("active");
	} else {
		head.style.backgroundColor = "transparent";
		up.classList.remove("active");
	}
};

show.addEventListener("click", () => {
	mnue.style.display = "flex";
	link.style.display = "block";
});
if (document.body.scrollWidth <= 1400) {
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
up.onclick = () => {
	window.scrollTo({
		top: 0,
		"behavior" :"smooth"
	});
};
