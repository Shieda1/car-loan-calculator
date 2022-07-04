const loan =  document.getElementById('loan');
const interest = document.getElementById('interest');
const term = document.getElementById('term');
const time = document.getElementById('time');
const btn = document.getElementById('btn');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');

// time
let tim;
term.addEventListener('change', () => {
  if(time.value === 'years')
    tim = term.value * 12;

  else if(time.value === 'months')
    tim = term.value;
})

let compoundFrequency = 1;

time.addEventListener('click', () => {
  if(time.value === 'years')
    tim = term.value * 12;

  else if(time.value === 'months')
    tim = term.value;
})

btn.addEventListener('click', function() {
  result1.textContent = `Monthly Payment = $ ${computePayment().toFixed(2)}`;
  result2.textContent = `Total Interest Paid = $ ${computTotalInterest().toFixed(2)}`;
  result3.textContent = `Total Loan Paid = $ ${computeTotalLoan().toFixed(2)}`
})


function computePayment() {
  let monthlyInterest = (interest.value / (100 * 12));
  return (loan.value * monthlyInterest * Math.pow(1 + monthlyInterest, tim)) / (Math.pow(1 + monthlyInterest, tim) - 1);
}

function computTotalInterest() {
  let payment = computePayment();
  return (payment * tim) - loan.value;
}

function computeTotalLoan() {
  return (computePayment() * tim);
}