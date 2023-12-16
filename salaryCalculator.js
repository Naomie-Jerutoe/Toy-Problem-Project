//declare a function that will calculate the net salary of the user
function netSalaryCalculator() {
    //prompt the user to input the basic salary and the benefits
    const basicSalary = prompt ('Input your basic salary',);
    const benefits = prompt ('Input your benefits',);
    // convert the two inputs to integer and add them together
    const grossSalary = parseInt(basicSalary) + parseInt(benefits);
    // calculate the net salary
    const netSalary = grossSalary - (calculatePayee(grossSalary) + calculateNhifDeduction(grossSalary) + calculateNssfDeductions(grossSalary));
        alert (`Your Net Salary is: ${netSalary}`);
}

//declare a function to calculate the payee based on different salary bracket
function calculatePayee(grossSalary){
    let payee = 0;
// use a switch statement to check the conditions and use the payeeRate() to calculate Payee amount.
    switch(true){
        case grossSalary >= 0 && grossSalary <= 24000:
            payee = payeeRate(grossSalary, 0.1);
            break;
        case grossSalary >= 24001 && grossSalary <= 32333:
            payee = payeeRate(grossSalary, 0.25);
            break;
        case grossSalary >= 32334 && grossSalary <= 500000:
            payee = payeeRate(grossSalary, 0.3);
            break;
        case grossSalary >= 500001 && grossSalary <= 800000:
            payee = payeeRate(grossSalary, 0.25);
            break;
        case grossSalary > 8000001:
            payee = payeeRate(grossSalary, 0.25);
            break;
        default:
            alert ('Invalid input');
    }
        return payee;
}

//declare a function that calculates the payee rate, and it takes two parameters.
function payeeRate(grossSalary, rate){
    return Math.floor(grossSalary * rate);
}

//declare a function that calculates the NHIF deductions and it takes one parameter.
function calculateNhifDeduction(grossSalary){
    let nhif = 0;
// use conditional switch statement that assigns the NHIF amount to be deducted if the condition is true. 
    switch(true){
        case grossSalary >= 0 && grossSalary <= 5999:
            nhif = 150;
            break;
        case grossSalary >= 6000 && grossSalary <= 7999:
            nhif = 300;
            break;
        case grossSalary >= 8000 && grossSalary <= 11999:
            nhif = 400;
            break;
        case grossSalary >= 12000 && grossSalary <= 15999:
            nhif = 500;
            break;
        case grossSalary >= 16000 && grossSalary <= 19999:
            nhif = 600;
            break;
        case grossSalary >= 20000 && grossSalary <= 24999:
            nhif = 750;
            break;
        case grossSalary >= 25000 && grossSalary <= 29999:
            nhif = 850;
            break;
        case grossSalary >= 30000 && grossSalary <= 34999:
            nhif = 950;
            break;
        case grossSalary >= 35000 && grossSalary <= 39999:
            nhif = 950;
            break;
        case grossSalary >= 40000 && grossSalary <= 44999:
            nhif = 1000;
            break;
        case grossSalary >= 45000 && grossSalary <= 49999:
            nhif = 1100;
            break;
        case grossSalary >= 50000 && grossSalary <= 59999:
            nhif = 1200;
            break;
        case grossSalary >= 60000 && grossSalary <= 69999:
            nhif = 1300;
            break;
        case grossSalary >= 70000 && grossSalary <= 79999:
            nhif = 1400;
            break;
        case grossSalary >= 80000 && grossSalary <= 89999:
            nhif = 1500;
            break;
        case grossSalary >= 90000 && grossSalary <= 99999:
            nhif = 1600;
            break;
        case grossSalary >= 100000:
            nhif = 1700;
            break;
        default:
            alert ('invalid input');
    }
        return nhif;
}

//declare a function that calculates the NSSF deduction and it takes one parameter.
function calculateNssfDeductions(grossSalary){
    return grossSalary * 0.06;
}