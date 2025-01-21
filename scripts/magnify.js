function magnify(element) {
	let imgSrc = element.querySelector("img").src;
	let caption = element.querySelector("img").getAttribute("data-caption");

	document.getElementById("zoomImg").src = imgSrc;
	document.getElementById("zoomCaption").innerText = caption;
	document.getElementById("zoomBox").classList.add("show");
}

function closeMagnify() {
	document.getElementById("zoomBox").classList.remove("show");
}
