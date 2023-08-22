document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  console.log(typeof newWithdrawAmount);
  withdrawField.value = '';

  if (isNaN(newWithdrawAmount)) {
    alert('Please enter a valid number');
    return;
  }

  const withdrawTotalElement = document.getElementById('withdraw-total');
  const prevWithdrawTotalString = withdrawTotalElement.innerText;
  const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);

  // update balance
  const balanceTotalElement = document.getElementById('balance-total');
  const prevBalanceTotalString = balanceTotalElement.innerText;
  const prevBalanceTotal = parseFloat(prevBalanceTotalString);


  if (newWithdrawAmount > prevBalanceTotal) {
    alert('You can not withdraw more than what you have in your account, Baaper Bank e Taka Nai!!!');
    return;
  }

  const currentWithdrawTotal = prevWithdrawTotal + newWithdrawAmount
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // calculate updated balance
  const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;

});
