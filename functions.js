//fre 21 maj. 

//Del 1.  Funktioner

//Uppgift 1 
//tar in två argument och adderar dem. Returnera resultatet. 

function add(a,b) {
    const addResult=a+b;
    console.log(addResult) ;
    return addResult; 
}

add(8,6);


//Uppgift 2
//tar in två argument och subtraherar dem. Returnera reultatet. 

function subtract(a,b) {
    const subResult=a-b;
    console.log(subResult) ;
    return subResult; 
}
subtract(8,6);

//Uppgift 3
//tar in två argument och multiplicerar dem. Returnera reultatet. 

function multiply(a,b) {
    const multResult=a*b;
    console.log(multResult) ;
    return multResult; 
}
multiply(8,6);

//Uppgift 4

function A(B) {
    B();
}

function B() {
    console.log("Hello World!"); 
}

A(B);
