function isPrime(num) 
{ 
    for (let iter = 2; iter < num; iter++) 
        if (num % iter == 0) 
            return false; 
   
    return true; 
} 

function factorial(num)
{
    let factorial = 1
    while (num)
    {
        if (num === 0 || num === 1)
            break
        else{
            factorial = factorial * num
            num--
        }
    }
    return factorial
}


function primeFactorial(start , end)
{
    for (iter = start; iter <= end; iter++)
    {
        if (iter === 0 || iter === 1)
            continue
        else if (isPrime(iter))
            console.log(`Factorial of prime number ${iter} is ${factorial(iter)}`)
    }   
}

primeFactorial(1 , 1000)