const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");
const resultDisplay = document.querySelector("#Output");
const Privacy = document.querySelector(".Privacy");
const Privacy_btn = document.querySelector(".Privacy_btn");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    resultDisplay.style.display = "block";
    resultDisplay.innerText = "Woaahhhh!! You're Lucky 🤩";
  } else if (sum % luckyNumber !== 0) {
    resultDisplay.innerText = "Oops! Not lucky!";
  }
}

function checkBirthdayIsLucky() {
  const dob = dateOfBirth.value;
  if (dob === "" || luckyNumber.value === "") {
    alert("Please fill both fields");
  }
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
}, 3000);

Privacy_btn.addEventListener("click", () => {
  Privacy.style.display = "none";
});
