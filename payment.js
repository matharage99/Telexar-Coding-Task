// Sample data for demonstration
let fees = [];

// Record fee collection
function recordFee() {
  const studentName = document.getElementById('sname').value;
  const amount = document.getElementById('amount').value;
  const status = document.getElementById('status').value;

  // Add the fee collection to the fees array
  fees.push({ studentName, amount, status });

  // Clear input fields
  document.getElementById('sname').value = '';
  document.getElementById('amount').value = '';

  // Update fee collection list
  updateFeeTable();

  // Show success message or perform any other necessary actions
  alert('Fee recorded successfully!');
}

// Update the fee collection table
function updateFeeTable() {
  const table = document.getElementById('fee-table');

  // Clear existing table rows
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Populate the table with fee collection data
  fees.forEach((fee) => {
    const row = table.insertRow();
    row.insertCell().innerText = fee.studentName;
    row.insertCell().innerText = fee.amount;
    row.insertCell().innerText = fee.status;
  });
}
