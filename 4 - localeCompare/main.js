document.addEventListener("DOMContentLoaded", function () {
  // store DOM elements
  const firstVariableInput = document.getElementById("first-variable");
  const secondVariableInput = document.getElementById("second-variable");
  const compareButton = document.querySelector("#compare-button");

  const resultDiv = document.querySelector(".result");

  //   function to handle comparison
  function runLocaleCompare() {
    const firstValue = firstVariableInput.value.trim();
    const secondValue = secondVariableInput.value.trim();
    if (!firstValue && secondValue) {
      resultDiv.textContent = "Please enter first value";
    } else if (!secondValue && firstValue) {
      resultDiv.textContent = "Please enter second value";
    } else if (!firstValue && !secondValue) {
      resultDiv.innerHTML = "<p>Please enter both values</p>";
      return;
    } else {
      const comparisonResult = firstValue.localeCompare(secondValue);
      let message;

      if (comparisonResult < 0) {
        message = `"${firstValue}" comes before "${secondValue}"`;
      } else if (comparisonResult > 0) {
        message = `"${firstValue}" comes after "${secondValue}"`;
      } else {
        message = `"${firstValue}" and "${secondValue}" are the same.`;
      }
      console.log(message);

      resultDiv.textContent = message;
    }
  }

  compareButton.addEventListener("click", runLocaleCompare);
});
