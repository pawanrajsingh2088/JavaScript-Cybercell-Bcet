var firstName = "Pawan Raj";
var lastName = "Singh";
var country = "India";
var city = "Bokaro Steel City";
var age = 19;
var isMarried = true;
var year = 2025;
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));
console.log(typeof("10")===typeof(10));
console.log(parseInt("9.8")===10);
console.log(10===5+5);
console.log(20===15+5);
console.log(100===200-100);
console.log(20!=20);
console.log(20===15+15);
console.log(30===24+58);
console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!="4");
console.log(4=="4");
console.log(4==="4");
console.log("python".length==="jargon".length);
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log("dragon".includes("on") && "python".includes("on"));
console.log(Date.year())
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());

var prevDate = new Date(1970 , 0 , 1);
console.log((date - prevDate)/1000);