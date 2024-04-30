studentMarks = 100

function gradeCalculator (marksObtained) {
    switch(true) {

        case marksObtained >90 && marksObtained <=100 :
            console.log("Congratulations!!! Your grade is 'S'")
            break
        case marksObtained >80 && marksObtained <=90 :
            console.log("Good Work!!! Your grade is 'A'")
            break
        case marksObtained >70 && marksObtained <=80 :
            console.log("Keep it up !!! Your grade is 'B'")
            break
        case marksObtained >60 && marksObtained <=70 :
            console.log("Not bad!!! Your grade is 'C'")
            break
        case marksObtained >50 && marksObtained <=60 :
            console.log("Need more focus!!! Your grade is 'D'")
            break
        case marksObtained >40 && marksObtained <=50 :
            console.log("Need to work hard!!! Your grade is 'E'")
            break
        case marksObtained >=0 && marksObtained <=40 :
            console.log("Better luck next time!!!, You have failed")
            break
        default :
            console.log("Invalid marks") 

    }

}
gradeCalculator(studentMarks)