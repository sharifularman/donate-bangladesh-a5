// donate for Noakhali flood affected people btn
const donationForNoakhali = document.getElementById("donate-noakhali-btn");
donationForNoakhali.addEventListener("click", function () {
    const startingDonationAmount = getTextElementByIdName("total-amount-noakhali");
    const inputAmount = getInputValueByIdName("noakhali-donation-amount");
    const accountBalance = getTextElementByIdName("account-balance");
    const historyContainer = document.getElementById("history-container");

    if (!isNaN(inputAmount) && inputAmount <= accountBalance && inputAmount > 0) {
        const totalDonationAmount = (startingDonationAmount + inputAmount).toFixed(2);
        const remainingBalance = (accountBalance - inputAmount).toFixed(2);
        document.getElementById("total-amount-noakhali").innerText = totalDonationAmount;
        document.getElementById("account-balance").innerText = remainingBalance;
        const div = divInnerHtml('noakhali-donation-amount')
        historyContainer.appendChild(div)
        alert('Congratulations! You have successfully donated')
    }
    else {
        alert("Please enter a valid amount")
    }
    clearInputField('noakhali-donation-amount').value = "";
    // document.getElementById("modal").classList.remove("hidden");
});

// donate for feni flood affected people 
const donationForFeni = document.getElementById('feni');
donationForFeni.addEventListener("click", function () {
    const initialDonationAmount = getTextElementByIdName("feni-initial-amount");
    const inputAmount = getInputValueByIdName("input-amount");
    const accountBalance = getTextElementByIdName("account-balance");
    if (!isNaN(inputAmount) && inputAmount <= accountBalance && inputAmount > 0) {
        const totalDonationAmount =( initialDonationAmount + inputAmount).toFixed(2);
        const feniDonationAmount = document.getElementById("feni-initial-amount");
        const remainingBalance = (accountBalance - inputAmount).toFixed(2);
        document.getElementById("account-balance").innerText = remainingBalance;
        feniDonationAmount.innerText = totalDonationAmount;

        const div = divInnerHtml('input-amount')
        historyContainer.appendChild(div)
        alert("Congratulations! You have successfully donated")
    }
    else {
        alert("Please enter a valid amount");
    }
    clearInputField('input-amount').value = ""

});

// Aid for Injured in the Quota Movement
const aidForQuotaMovement = document.getElementById("quota-movement");
aidForQuotaMovement.addEventListener("click", function () {
    const initialDonationAmount = getTextElementByIdName("aid-amount");
    const inputAmount = getInputValueByIdName("input-aid-amount");
    const accountBalance = getTextElementByIdName("account-balance");
    if (!isNaN(inputAmount) && inputAmount <= accountBalance && inputAmount > 0) {
        const totalDonationAmount = (initialDonationAmount + inputAmount).toFixed(2);
        const aidDonationAmount = document.getElementById("aid-amount");
        const remainingBalance = (accountBalance - inputAmount).toFixed(2);
        document.getElementById("account-balance").innerText = remainingBalance;
        aidDonationAmount.innerText = totalDonationAmount;

        const div = divInnerHtml('input-aid-amount');
        historyContainer.appendChild(div);
        alert("Congratulations! You have successfully donated")
    }
    else {
        alert("Please enter a valid amount");
    }

    clearInputField('input-aid-amount').value = "";
});
