 let sum1 = 0
 let sum2 = 0
 let sum3 = 0
 // sum of multipes of 3 or 5
 for (let iter = 0; iter <1000 ; iter ++)
    if (iter % 3 === 0 || iter % 5 ==0) 
        sum1+= iter

console.log("Sum of multiples of 3 or 5 is",sum1)

// sum of multipes of 3 and 5 --> which means multiples of 15
//Method-1
for (let iter = 0; iter <1000 ; iter ++)
    if (iter % 15 ==0) 
        sum2+= iter

//Method-2
for (let iter = 15; iter < 1000; iter+=15)
    sum3+= iter

console.log("Sum of multiples of 3 and 5 (15) is",sum2) 
