// Declare a function 
function studentGradeGenerator(){
    //prompt the user to input marks
    let marks = prompt('Input your marks between 0 and 100',);
    
    //set the conditions for the marks and alert the corresponding grades
    let grade;
    if (marks>=79 && marks<=100){
        grade ='A';
    }
    else if(marks>=60 && marks<79){
        grade = 'B';
    }
    else if(marks>=49 && marks<=59){
        grade = 'C';
    }
    else if(marks>=40 && marks<49){
        grade ='D';
    }
    else if(marks>0 && marks<40){
        grade = 'E';
    }else{
        alert ('Input the correct marks');
    }  
    return alert (`Your grade is: ${grade}`);
}
//invoke the function
// studentGradeGenerator();