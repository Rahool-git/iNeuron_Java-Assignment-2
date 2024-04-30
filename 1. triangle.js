let side_1 = 9
let side_2 = 91
let side_3 = 90

function traingle_type (x,y,z) {

    if (x === y && x === z)
        console.log("It's equilateral triangle")
    else if (x === y || y === z || x === z)
        console.log("It's isosceles triangle")
    else
        console.log("It's scalene triangle")

}

traingle_type(side_1,side_2,side_3)