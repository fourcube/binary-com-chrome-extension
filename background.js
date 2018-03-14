function setTradeSize() {
  const accountBalanceEl = document.querySelector('.topMenuBalance');
  const amountEl = document.querySelector('#amount');
  const amountTypeEl = document.querySelector('#amount_type');
  if (!accountBalanceEl) return;
  if (!amountEl) return;
  if (!amountTypeEl) return;


  const balance = parseFloat(accountBalanceEl.innerText);
  const stakeStr = (balance * 0.05).toFixed(2);
  const currentStake = amountEl.value;
  amountTypeEl.value = 'stake';

  amountEl.value = stakeStr;
  document.title = balance + ' €';

  if (currentStake !== stakeStr) {
    var event = new Event('change');
    amountTypeEl.dispatchEvent(event);
  }
}

(function() {
  setInterval(() => {
    setTradeSize();
  }, 1000);
})();