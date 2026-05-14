let total = 0;

function addExpense() {

  const name = document.getElementById("expenseName").value;

  const amount = Number(document.getElementById("expenseAmount").value);

  if(name === "" || amount === 0) {
    alert("Please enter valid details");
    return;
  }

  total += amount;

  document.getElementById("total").innerText = total;

  const li = document.createElement("li");

  li.innerText = `${name} - ₹${amount}`;

  document.getElementById("expenseList").appendChild(li);

  document.getElementById("expenseName").value = "";

  document.getElementById("expenseAmount").value = "";
}
