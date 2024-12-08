function getTextElementByIdName(id) {
    const totalDonationAmount = parseFloat(document.getElementById(id).innerText);
    return totalDonationAmount;
}

function getInputValueByIdName(id) {
    const donationAmount = parseFloat(document.getElementById(id).value);
    return donationAmount;
}