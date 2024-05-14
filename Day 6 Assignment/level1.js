// Question No.- 1
for(let i=0; i<=10; i++){
    console.log(i);
}

let j=0;
while(j<=10){
    console.log(j);
    i++;
}

let k=0;
do{
    console.log(k);
}while(k<=10);

// Question No.- 2
for(let i = 10 ; i >= 0 ; i--){
    console.log(i);
}
let z = 10;
while(z >= 0){
    console.log(z);
    z--;
}
let l = 10;
do{
    console.log(l);
    l--;
}while(l >= 0);

// Question No.- 3
let n = prompt("Enter n:");
for(let i = 0 ; i <= n ; i++){
    console.log(i);
}

// Question No.- 4
for(let i = 0 ; i < 7 ; i++ ) {
    let pattern = "";
    for(let j = 0 ; j <= i ; j++ ) {
        pattern += "#";        
    }
    console.log(pattern);
}

// Question No.- 5
for(let  i = 0 ; i <= 10 ; i++){
    console.log(`${i} x ${i} = ${i}`);
}

// Question No.- 6
console.log("i  i^2  i^3");
for(let i = 0 ; i < 10 ; i++){
    console.log(`${i}  ${i*i}  ${i*i*i}`);
}

// Question No.- 7
let sumEven = 0
console.log("Even numbers between 0 to 100");
for(let i = 0 ; i <= 100 ; i++){
    if(i%2 == 0) {console.log(i); sumEven += i}
}
let sumOdd = 0;
console.log("Odd numbers between 0 to 100");
for(let i = 0 ; i <= 100 ; i++){
    if(i%2 != 0) {console.log(i); sumOdd += i}
}

// Question No.-8
console.log("Prime numbers :: ");
for(let i = 0 ; i <= 100 ; i++){
    if(isPrime(i)) console.log(i);
}

function isPrime(n){
    for(let i = 2 ; i < n ; i++){
        if( n % i == 0) return false;
    }
    return true;
}

// Question No.- 9
let sum = 0;
for(let i = 0 ; i <= 100 ; i++){
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to
100 is ${sumOdd}.`);
let arr = [sumEven , sumOdd]
console.log(arr);

// Question No.- 10
function generateRandom(n = 5){
    let arr = new Array(n);
    for(let i = 0 ; i < n ; i++){
        arr[i] = Number(Math.floor(Math.random() * 1000))
    }
    return arr;
}

console.log(generateRandom());

// Question No.- 11
function gnrtUnqRandom(n = 5) {
    let arr = [];
    while(arr.length < n){
        let randval = Math.floor(Math.random() * 10000)
        if(arr.indexOf(randval) == -1){
            arr.push(randval)
        }
    }
    return arr;
}

console.log(gnrtUnqRandom());

function gnrtRndmId(n = 6){
    let generatedId = "";
    let symbols = "abcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0 ; i < n ; i++){
        let symbolIdx = Math.floor(Math.random() * symbols.length);
        generatedId += symbols[symbolIdx];
    }
    return generatedId;
}

console.log(gnrtRndmId());