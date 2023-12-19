//declare a function that will calculate the net salary of the user
function netSalaryCalculator() {
    //prompt the user to input the basic salary and the benefits
    const basicSalary = prompt ('Input your basic salary',);
    const benefits = prompt ('Input your benefits',);
    // convert the two inputs to integer and add them together
    const grossSalary = parseInt(basicSalary) + parseInt(benefits);
    const nhifDeductions =calculateNhifDeduction(grossSalary);
    const nssfDeductions = calculateNssfDeductions(basicSalary);
    const taxableIncome = grossSalary - (nhifDeductions + nssfDeductions);
    const payeDeduction = calculatePaye(taxableIncome);
    // calculate the net salary
    const netSalary = grossSalary - (payeDeduction + nhifDeductions + nssfDeductions);
    //display the result to the user
    alert(`Payslip:\n 
    Gross Salary:\t Ksh. ${grossSalary}\n
    PAYE:\t Ksh. ${payeDeduction}\n
    NHIF Deduction:\t Ksh. ${nhifDeductions}\n 
    NSSF Deductions :\t Ksh. ${nssfDeductions}\n
    Net Salary is:\t Ksh. ${netSalary}`);
}

//declare a function to calculate the PAYE based on different salary bracket
function calculatePaye(taxableIncome){
    let paye = 0;
// use a switch statement to check the conditions and use the payeRate() to calculate PAYE amount.
    switch(true){
        case taxableIncome >= 0 && taxableIncome <= 24000:
            paye = payeRate(taxableIncome, 0.1);
            break;
        case taxableIncome >= 24001 && taxableIncome <= 32333:
            paye = payeRate(taxableIncome, 0.25);
            break;
        case taxableIncome >= 32334 && taxableIncome <= 500000:
            paye = payeRate(taxableIncome, 0.3);
            break;
        case taxableIncome >= 500001 && taxableIncome <= 800000:
            paye = payeRate(taxableIncome, 0.325);
            break;
        case taxableIncome > 8000001:
            paye = payeRate(taxableIncome, 0.35);
            break;
        default:
            alert ('Invalid input');
    }
        return paye;
}

//declare a function that calculates the paye rate, and it takes two parameters.
function payeRate(taxableIncome, rate){
    return Math.floor(taxableIncome * rate);
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
function calculateNssfDeductions(basicSalary){
    return Math.floor(basicSalary * 0.06);
}