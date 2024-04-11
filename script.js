document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  });


document.addEventListener('DOMContentLoaded', () => {
    const numberInputs = document.querySelectorAll('.number-input');
    const errorIcons = document.querySelectorAll('.errorIcon');
  
    numberInputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        const isValidNumber = !isNaN(parseFloat(input.value)) && isFinite(input.value);
        errorIcons[index].style.display = isValidNumber ? 'none' : 'inline-block';
  
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
      });
    });
  });

  document.getElementById('calculateButton').addEventListener('click', () => {
    const grossAnnualIncome = parseFloat(document.getElementById('income').value.replace(/,/g, ''));
    const extraIncome = parseFloat(document.getElementById('extraIncome').value.replace(/,/g, ''));
    const totalApplicableDeduction = parseFloat(document.getElementById('deduction').value.replace(/,/g, ''));
    const age = document.getElementById('age').value;
  
    const overallIncome = grossAnnualIncome + extraIncome - totalApplicableDeduction;
    let taxableIncome = 0;
  
    if (overallIncome > 800000) {
      taxableIncome = overallIncome - 800000;
    }
  
    let tax = 0;
    if (age === 'lessThan40') {
      tax = taxableIncome * 0.3;
    } else if (age === 'fortyToSixty') {
      tax = taxableIncome * 0.4;
    } else if (age === 'sixtyPlus') {
      tax = taxableIncome * 0.1;
    }
  
    document.getElementById('tax').innerText = `₹ ${tax.toFixed(2)} Lakhs`;
  });