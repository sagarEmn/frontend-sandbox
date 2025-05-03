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
  let remainingTime = 60;

  // function to start and reset the countdown timer
  const startCountdown = () => {
    resendButton.style.display = "none";
    resendCountdown.style.display = "block";

    remainingTime = 60;
    timerElement.textContent = remainingTime;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      remainingTime--;
      timerElement.textContent = remainingTime;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        resendButton.style.displya = "block";
        resendCountdown.style.display = "none";
      }
    }, 1000);
  };

  startCountdown();
});
