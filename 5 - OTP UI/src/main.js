document.addEventListener("DOMContentLoaded", () => {
  // reference to DOM elements
  const inputFields = document.querySelectorAll(".otp__input-field");
  const verifyButton = document.querySelector(".otp__verify-button");
  const resendButton = document.querySelector(".otp__resend-button");
  const resendCountdown = document.querySelector(".otp__resend-countdown");
  const timerElement = document.getElementById("timer");
  const successMessage = document.querySelector(".otp-success");
  const errorMessage = document.querySelector(".error-message");

  // set initial display to none
  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  // timer
  let timerInterval;
  let remainingTime = 2;

  // function to start and reset the countdown timer
  const startCountdown = () => {
    resendButton.style.display = "none";
    resendCountdown.style.display = "block";

    remainingTime = 2;
    timerElement.textContent = remainingTime;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      remainingTime--;
      timerElement.textContent = remainingTime;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        resendButton.style.display = "block";
        resendCountdown.style.display = "none";
      }
    }, 1000);
  };

  startCountdown();

  resendButton.addEventListener("click", () => {
    // Clear input fields
    inputFields.forEach((input) => {
      input.value = "";
    });

    // Reset form state
    verifyButton.disabled = true;
    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    // Restart countdown
    startCountdown();

    // focus on first input field
    inputFields[0].focus();
  });

  const checkInputs = () => {
    let allFilled = true;

    inputFields.forEach((input) => {
      if (!input.value) {
        allFilled = false;
      }
    });

    verifyButton.disabled = !allFilled;
  };

  inputFields.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const currentValue = e.target.value;

      // ensure only one digit is entered
      if (currentValue > 1) {
        input.value = currentValue.slice(0, 1);
      }

      // move to the next input field
      if (currentValue && index < inputFields.length - 1) {
        inputFields[index + 1].focus();
      }

      checkInputs();
    });

    // keyboard navigation
    input.addEventListener("keydown", (e) => {
      // Move to the previous input field on backspace if current field is empty
      if (e.key === "Backspace" && !input.value && index > 0) {
        inputFields[index - 1].focus();
      }

      // Arrow key navigation
      if (e.key === "ArrowLeft" && index > 0) {
        inputFields[index - 1].focus();
      }

      if (e.key === "ArrowRight" && index < inputFields.length - 1) {
        inputFields[index + 1].focus();
      }
    });
  });
});
