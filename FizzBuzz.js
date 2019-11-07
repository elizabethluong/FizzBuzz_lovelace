function FizzBuzz(number) {
    // Return FizzBuzz if the number is divisible by 3 & 5
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    }
    // Return Fizz if the number is divisible by 3 
    else if (number % 3 === 0 ) {
        return "Fizz"
    }
    // Return Buzz if the number is divisible by 5
    else if (number % 5 === 0) {
        return 'Buzz';
    }
    
    return number
}