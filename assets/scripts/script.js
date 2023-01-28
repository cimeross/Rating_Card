const chosenRating = document.querySelectorAll(".buttons");
const submitButton = document.querySelector("button");
const card = document.querySelector(".card");
const card2 = document.querySelector(".card_2");
const ratingText = document.querySelector("#rating-text");

chosenRating.forEach((rating) => {
	rating.addEventListener("click", () => {
		document.querySelector(".active")?.classList.remove("active");
		rating.classList.add("active");
	});
});

submitButton.addEventListener("click", () => {
	let activeRating = document.querySelector(".active");
	if (activeRating) {
		card.style.visibility = "hidden";
		card2.style.visibility = "visible";
		ratingText.textContent = `You selected ${activeRating.textContent} out of 5`;
	} else {
		alert("Please select a rating");
	}
});
