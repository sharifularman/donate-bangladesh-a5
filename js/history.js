const historyContainer = document.getElementById("history-container");
const cardContainer = document.getElementById("card-container");
const historyButton = document.getElementById("history");
const donateButton = document.getElementById("donate");
historyButton.addEventListener("click", function () {
    cardContainer.classList.add("hidden");
    historyContainer.classList.remove("hidden");
    historyButton.classList.add("bg-[rgb(180,244,97)]");
    historyButton.classList.remove("bg-transparent");
    donateButton.classList.remove("bg-[rgb(180,244,97)]");
})
donateButton.addEventListener("click", function () {
    console.log('clicked');
    
    historyContainer.classList.add("hidden");
    cardContainer.classList.remove("hidden");
    donateButton.classList.add("bg-[rgb(180,244,97)]");
    historyButton.classList.remove("bg-[rgb(180,244,97)]");
    historyButton.classList.add("bg-transparent");
})