function studentGradeGenerator(){
    let marks = prompt('Input marks between 0 and 100', '');
    
    if (marks>=79 && marks<=100){
        alert('A');
    }
    else if(marks>=60 && marks<79){
        alert ('B');
    }
    else if(marks>=49 && marks<=59){
        alert ('C');
    }
    else if(marks>=40 && marks<49){
        alert ('D');
    }
    else if(marks>=0 && marks<40){
        alert ('E');
    }else{
        alert ('Input the correct marks');
    }   
}
studentGradeGenerator();