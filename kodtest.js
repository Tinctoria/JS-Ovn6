//fre 21 maj. 

//Del 4. Typiska kodtestsövningar. 

//1 FizzBuzz, villkor och jämförelser

var i;
for(i=1; i<101; i++) {
    if ((Number.isInteger(i/3)) && !(Number.isInteger(i/5))){
        console.log("Fizz");
    }
    else if (!(Number.isInteger(i/3)) && (Number.isInteger(i/5))){
        console.log("Buzz");
    }
    else if ((Number.isInteger(i/3)) && (Number.isInteger(i/5))) {
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }
    
}