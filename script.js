document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  const numberInputs = document.querySelectorAll('.number-input');
  const errorIcons = document.querySelectorAll('.errorIcon');

  numberInputs.forEach((input, index) => {
      input.addEventListener('input', () => {
          validateInput(input, errorIcons[index]);
      });
  });

  document.getElementById('calculateButton').addEventListener('click', () => {
      const requiredFields = document.querySelectorAll('[data-required]');
      let allValid = true;

      requiredFields.forEach(field => {
          const errorIcon = field.parentNode.querySelector('.errorIcon');
          const isValid = field.value.trim() !== '';

          errorIcon.style.display = isValid ? 'none' : 'inline-block';
          if (!isValid) {
              allValid = false;
          }
      });

      if (allValid) {
          calculateTax();
          showModal();
      }
  });
});

function validateInput(input, errorIcon) {
  const isValidNumber = !isNaN(parseFloat(input.value)) && isFinite(input.value);
  errorIcon.style.display = isValidNumber || input.value.trim() === '' ? 'none' : 'inline-block';
}

function calculateTax() {
  const grossAnnualIncome = parseFloat(document.getElementById('income').value.replace(/,/g, '')) || 0;
  const extraIncome = parseFloat(document.getElementById('extraIncome').value.replace(/,/g, '')) || 0;
  const totalApplicableDeduction = parseFloat(document.getElementById('deduction').value.replace(/,/g, '')) || 0;
  const age = document.getElementById('age').value;

  const overallIncome = grossAnnualIncome + extraIncome - totalApplicableDeduction;
  const taxableIncome = Math.max(0, overallIncome - 800000);

  let tax = 0;
  if (age === 'lessThan40') {
      tax = taxableIncome * 0.3;
  } else if (age === 'fortyToSixty') {
      tax = taxableIncome * 0.4;
  } else if (age === 'sixtyPlus') {
      tax = taxableIncome * 0.1;
  }

  document.getElementById('tax').innerText = `₹ ${tax.toFixed(2)} Lakhs`;
}

function showModal() {
  const modal = document.getElementById('customModal');
  const closeButton = modal.querySelector('.close');

  modal.style.display = 'block';

  closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
}