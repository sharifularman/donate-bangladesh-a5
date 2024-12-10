function getTextElementByIdName(id) {
    const totalDonationAmount = parseFloat(document.getElementById(id).innerText);
    return totalDonationAmount;
}

function getInputValueByIdName(id) {
    const donationAmount = parseFloat(document.getElementById(id).value);
    return donationAmount;
}

// clear the input field 
function clearInputField(id) {
    const inputField = document.getElementById(id);
    return inputField
}

// create a div for the history section
function divInnerHtml(id) {
    const inputAmount = getInputValueByIdName(id);
    const dateTime = new Date();
    const div = document.createElement("div");
        div.style.paddingBottom = "20px";
        div.innerHTML = `
        <div class="w-4/5 mx-auto border border-green-200 shadow-sm p-4 text-center">
     <h2 class="font-semibold text-xl">${inputAmount} BDT added at ${dateTime}</h2>
    <p>Thank you for the contribution</p>
    </div>`
    return div;
}

