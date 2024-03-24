//This function prompts the user to input student marks and returns the corresponding grade.
function generateGrade(grade) {
    //Get user input for student marks
    let marks = prompt('Enter student marks(0-100:');
    //validate the input

    if(isNaN(marks) || marks < 0 || marks > 100){
        return"Invalid marks. Please enter a number between 0 and 100.";
    }
    //Determine grade
    
    if (marks > 79) {
        return "Grade:A";
    }
    else if (marks >= 60) {
        return "Grade:B";
    }
    else if (marks >= 50) {
        return "Grade:C";
    }
    else if (marks >= 40) {
        return "Grade:D";
    }
    else {
        return "Grade:E";
    }
}

//Example.usage
console.log(generateGrade(grade));