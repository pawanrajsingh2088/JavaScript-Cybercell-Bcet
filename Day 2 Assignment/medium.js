console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
if(typeof("10")=== typeof(10)){
    console.log("Equal");
}else{
    console.log(typeof(parseInt("10"))=== typeof(10))
}
if(parseFloat("9.8")===10){
    console.log("Equal");
}else{
    console.log(Math.ceil(parseFloat("9.8"))===10);
}
console.log("python".includes("on") && "jargon".includes("on"));
console.log("I hope this course is not full of jargon.".includes("jargon"));
console.log(parseInt(Math.random()*100));
console.log(parseInt(Math.random()*50+50));
console.log(parseInt(Math.random()*255));
var word = "JavaScript";
console.log(word.charAt(parseInt(Math.random() * word.length - 1)));
for(let i = 1; i <= 5; i++){
    console.log(i,Math.pow(i,0),Math.pow(i,1),Math.pow(i,2),Math.pow(i,3));
}
var sentence = 'You cannot end a sentence with because because because is a conjunction' ;
var sliced = sentence.slice(sentence.indexOf('because'),sentence.indexOf(' is')) ;
console.log(sliced);