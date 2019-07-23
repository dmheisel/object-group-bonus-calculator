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

for (let i = 0; i < employees.length; i++){
  console.log(new EmployeeData(employees[i]));
  // getting the for loop to run to the index of the employee array.  
}



function EmployeeData(employee){
  //console.log('in Employee Data');
  this.name = employee.name;
  this.bonusPercentage = getBonusPercentage(employee);
  this.totalBonus = Math.round(getBonusPercentage(employee) * employee.annualSalary);
  this.totalCompensation = this.totalBonus + parseInt(employee.annualSalary);
  
}// end EmployeeData

function getBonusPercentage(employee) {
  let returnPercentage = 0;
  if (employee.reviewRating === 3) {
    returnPercentage += 4;
  } else if (employee.reviewRating === 4) {
    returnPercentage += 6;
  } else if (employee.reviewRating === 5) {
    returnPercentage += 10;
  };
  if (employee.employeeNumber.length === 4) {
    returnPercentage += 5;
  };
  if (parseInt(employee.annualSalary) > 65000) {
    returnPercentage -= 1;
  };
  if (returnPercentage < 0) {
    returnPercentage = 0;
  };
  if (returnPercentage > 13) {
    returnPercentage = 13;
  };
  return (returnPercentage / 100);
}


function calculateBonus(employee){
  //console.log('in calculateBonus');
  if (employee.reviewRating === 2) {
    return 0;
  }
  
}


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
