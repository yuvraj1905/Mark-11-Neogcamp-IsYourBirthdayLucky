const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");
const resultDisplay = document.querySelector("#txt-area");
const Privacy = document.querySelector(".Privacy");
const Privacy_btn = document.querySelector(".Privacy_btn");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    resultDisplay.value = "Lucky";
    resultDisplay.style.display = "block;";
  } else {
    resultDisplay.value = "nnnhe";
  }
}

function checkBirthdayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calSum(dob);
  compareValues(sum, luckyNumber.value);
}

function calSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum += Number(dob.charAt(i));
  }
  return sum;
}

checkNumberBtn.addEventListener("click", checkBirthdayIsLucky);

setTimeout(function () {
  Privacy.style.display = "block";
}, 2000);

Privacy_btn.addEventListener("click", () => {
  Privacy.style.display = "none";
});
