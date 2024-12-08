// donate for Noakhali flood affected people btn
document.getElementById("donate-noakhali-btn").addEventListener("click", function () {
    const startingDonationAmount = getTextElementByIdName("total-amount-noakhali");
    const donationAmountInput = getInputValueByIdName("noakhali-donation-amount");
    const accountBalance = getTextElementByIdName("account-balance");
    const historyContainer = document.getElementById("history-container");

    if (donationAmountInput <= accountBalance) {
        const totalDonationAmount = startingDonationAmount + donationAmountInput;
        const remainingBalance = accountBalance - donationAmountInput;
        document.getElementById("total-amount-noakhali").innerText = totalDonationAmount;
        document.getElementById("account-balance").innerText = remainingBalance;
        const div = document.createElement("div");
        div.style.paddingBottom = "20px";
        div.innerHTML = `
     <h2 class="font-bold text-xl">${donationAmountInput} bdt added at 10.10 pm</h2>
    <p>Thank you for the contribution</p>`
        historyContainer.appendChild(div)
        // alert('You have successfully donate')
    }
    else {
        alert("Please enter a valid amount")
    }
    document.getElementById("noakhali-donation-amount").value = "";
    document.getElementById("modal").classList.remove("hidden");
});


