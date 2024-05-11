# Tax Calculator Web Application

This is a simple web-based tax calculator application built with HTML, CSS, and JavaScript. It allows users to input their financial details and age group to calculate their income tax based on predefined tax brackets.

## Features

- **User Input Fields**:
  - **Gross Annual Income**: Enter your total salary before any deductions.
  - **Extra Income**: Input any additional income beyond your salary.
  - **Total Applicable Deduction**: Enter the total applicable deductions from your income.
  - **Age Group**: Select your age group from predefined options.

- **Error Handling**:
  - Fields are validated to ensure they are not empty and contain valid numerical inputs.
  - Error icons are displayed next to the fields that require input or validation.

- **Tax Calculation**:
  - The tax calculation works based on this formula -
  - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
      - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
      - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
  - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
      - 30% for people with age < 40
      - 40% for people with age ≥ 40 but < 60
      - 10% for people with age ≥ 60
      - Example
        - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs

- **Modal Display**:
  - Upon successful validation and calculation, a modal pops up displaying the calculated tax amount.

## How to Use

1. **Input Details**:
   - Enter your financial details in the respective fields:
     - **Gross Annual Income**
     - **Extra Income**
     - **Total Applicable Deduction**
     - **Age Group**

2. **Validation**:
   - Ensure all required fields are filled correctly.
   - The application will display error icons next to fields that require input or validation.

3. **Calculate Tax**:
   - Click the "Submit" button to calculate your income tax based on the entered details.

4. **View Result**:
   - After successful validation, a modal will appear showing your calculated income tax.

## Technologies Used

- **HTML**: Structure and layout of the web page.
- **CSS**: Styling and design of the user interface.
- **JavaScript**: Functionality for form validation, tax calculation, and modal display.
- **Bootstrap**: Utilized for styling components and responsiveness.
- **Bootstrap Icons**: Icons used for tooltip triggers and error indicators.

## Files Overview

- **index.html**: Main HTML file containing the structure of the web page.
- **style.css**: CSS file for styling the application.
- **script.js**: JavaScript file handling form validation, tax calculation, and modal display.
- **README.md**: Documentation file providing an overview of the application.

## Additional Notes

- Ensure all files are properly linked (e.g., Bootstrap CSS/JS files) for the application to function correctly.
- This tax calculator is designed for demonstration purposes and may require further enhancements for production use, such as server-side validation and additional tax rules.

Feel free to explore and modify this tax calculator according to your needs!
