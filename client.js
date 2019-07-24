// js employee bonus calculations
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

$(document).ready(readyNow);

function readyNow() {
  console.log('Ready!');
  $('#getBonusButton').on('click', buttonHandler); // runs buttonHandler on click
}

function buttonHandler() {
  $('#employeeBonusList').empty(); // clears list of display prior to updating

  for (let employee of employees) {
    let bonusInfo = new EmployeeBonusData(employee);
    $('#employeeBonusList').append(`<li>
      Name: ${bonusInfo.name}
      <br>Bonus Percentage: ${bonusInfo.bonusPercentage * 100}%
      <br>Total Bonus: $${bonusInfo.totalBonus}
      <br>Total Compensation: $${bonusInfo.totalCompensation}
      </li>`);
    // loops through list of employees and generates bonus info, appends to DOM
  }
}

function EmployeeBonusData(employee) {
  /* runs getBonusPercentage() to get percentage of employee's bonus, creates a
  new object with props for bonusPercentage, totalBonus, and totalCompensation */

  let bonusPercentage = getBonusPercentage(employee); // retrieves percentage

  this.name = employee.name;
  this.bonusPercentage = bonusPercentage; // sets percentage
  this.totalBonus = Math.round(bonusPercentage * employee.annualSalary);
  //percentage times annual salary
  this.totalCompensation = this.totalBonus + parseInt(employee.annualSalary);
  //total bonus + salary -- need to parseInt to avoid concat problems
}

function getBonusPercentage(employee) {
  let returnPercentage = 0;

  if (employee.reviewRating === 3) {
    returnPercentage += 4;
  } else if (employee.reviewRating === 4) {
    returnPercentage += 6;
  } else if (employee.reviewRating === 5) {
    returnPercentage += 10;
  } // sets bonus start value based on review rating

  if (employee.employeeNumber.length === 4) {
    returnPercentage += 5;
  } // adds 5 percent if employee number indicates long-term employee

  if (parseInt(employee.annualSalary) > 65000) {
    // parseInt not needed?
    returnPercentage -= 1;
  } // drops 1 percent if employee has high salary

  if (returnPercentage < 0) {
    returnPercentage = 0;
  } else if (returnPercentage > 13) {
    returnPercentage = 13;
  } // sets bonus range between 0% and 13% -- cannot be out of this range.

  return returnPercentage / 100; // converts to float for percentage calculation
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
