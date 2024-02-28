// Get all input elements with class 'code'
const inputs = document.querySelectorAll('.code');

// Add event listeners to each input element
inputs.forEach((input, index) => {
  // Add input event listener to move focus to next input
  input.addEventListener('input', (e) => {
    // If input value is filled
    if (input.value.length === 1) {
      // Move focus to next input if not the last input
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  // Add keydown event listener to move focus to previous input on backspace
  input.addEventListener('keydown', (e) => {
    // If backspace key is pressed and input value is empty and not the first input
    if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
      // Move focus to previous input
      inputs[index - 1].focus();
    }
  });
});

