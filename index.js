const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const msg = document.querySelector("#error-message");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const noofNotes = document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();

  if (billAmount.value > 0)
  {

    if (cashGiven.value >= billAmount.value)
     {
      console.log("im here ");
      const amountToBereturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBereturned);
    }
    else
    {
      showMessage("Wanna wash the PLates??");

    }
  }
  else
  {
    showMessage("Invalid Bill Amount!!");
  }
});

function calculateChange(amountToBereturned)
 {
  //go over all the available

    for (let i = 0; i < availableNotes.length; i++)
     {

        // here that amtreturned is divided by the denomination
        const numberOfNotes = Math.trunc(amountToBereturned / availableNotes[i]);
        // this below line is to calculate the change
        amountToBereturned = amountToBereturned % availableNotes[i];
        // this below will change the html in specific denomination
        noofNotes[i].innerText = numberOfNotes;
    }


}

function hideMessage() {
  msg.style.display = "none";
}

function showMessage(message) {
  msg.style.display = "block";
  msg.innerText = message;
}
