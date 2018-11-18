document.getElementById("loan-form").addEventListener('submit', (e) => {
  // Hide results
  console.log("RUNNING");
  document.getElementById("result").style.display = 'none';
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  const amount = document.getElementById('amount');
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");

  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");


  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Monthly Payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    document.getElementById("result").style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  } else {
    showError("Please check your inputs");
    document.getElementById("result").style.display = 'none';
    document.getElementById('loading').style.display = 'none';
  }
}

// Show Errors
function showError(error) {
  // Create Div
  const errorDiv = document.createElement("div");
  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector(".heading");
  // add classes
  errorDiv.className = "alert alert-danger";
  // create textNode and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Inserting error above the heading
  card.insertBefore(errorDiv, heading);


  // Remove error after 3 seconds
  setTimeout(clearError, 3000);
}

// clearError
function clearError() {
  document.querySelector('.alert').remove();
}