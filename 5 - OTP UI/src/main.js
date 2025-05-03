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
});
