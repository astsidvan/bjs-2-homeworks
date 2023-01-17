"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c;
  if (discriminant < 0) {
    arr = []; 
  }
    else if (discriminant = 0) {
      arr = [-b/(2*a)];
    }
    else if (discriminant > 0) {
      arr = [(-b + Math.sqrt(d) )/(2*a) && (-b - Math.sqrt(d) )/(2*a)];
    }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
