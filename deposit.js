document.getElementById('btn-deposit').addEventListener('click', function () {
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  const despositTotalElement = document.getElementById('deposit-total');
  const prevDespositTotalString = despositTotalElement.innerText;
  const prevDespositTotal = parseFloat(prevDespositTotalString);

  // add numbers to set the total deposit
  const currentDepositTotal = prevDespositTotal + newDepositAmount;
  despositTotalElement.innerText = currentDepositTotal;

  depositField.value = '';

  // update balance
  const balanceTotalElement = document.getElementById('balance-total');
  const prevBalanceTotalString = balanceTotalElement.innerText;
  const prevBalanceTotal = parseFloat(prevBalanceTotalString);

  // calculate current balance
  const currentBalanceTotal = prevBalanceTotal + newDepositAmount;
  // set the balance to the current balance
  balanceTotalElement.innerText = currentBalanceTotal;
});