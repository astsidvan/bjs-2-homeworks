"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c;
 
    if (discriminant == 0) {
      arr = [-b/(2*a)];
    }
    else if (discriminant > 0) {
      arr = [(-b + Math.sqrt(discriminant) )/(2*a) , (-b - Math.sqrt(discriminant) )/(2*a)];
    }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent || contribution || amount || date)) {
    return false;
  }
  
  let newPesent = percent / 100 / 12;
  let bodyCredit = amount - contribution;
  let monthlyPayment =
    bodyCredit * (newPesent + newPesent / ((1 + newPesent) ** date - 1));
  let totalAmount = Number((monthlyPayment * date).toFixed(2));

  return totalAmount;
}
