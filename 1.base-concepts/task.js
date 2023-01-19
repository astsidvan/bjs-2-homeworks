"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c;
 
    if (discriminant == 0) {
      arr = [-b/(2*a)];
    }
    else if (discriminant > 0) {
      arr = [(-b + Math.sqrt(d) )/(2*a) , (-b - Math.sqrt(d) )/(2*a)];
    }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return false;
  }
  if (isNaN(contribution)) {
    return false;
  }
  if (isNaN(amount)) {
    return false;
  }
  if (isNaN(date)) {
    return false;
  }
  let bodyCredit = 0;

  let newPesent = percent / 100 / 12;
  if (contribution) {
    bodyCredit = amount - contribution;
  } else {
    bodyCredit = amount;
  }

  let monthlyPayment =
    bodyCredit * (newPesent + newPesent / ((1 + newPesent)  date - 1));
  let totalAmount = Number((monthlyPayment * date).toFixed(2));

  return totalAmount;
}
