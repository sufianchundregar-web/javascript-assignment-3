// Q:1
// var customer = +prompt("enter a amount")
// var discount = 0;
// if (customer >= 10000) {
//  discountPercen = 20;
//  alert("your discount is" + customer * 20 / 100)   
// }else if (customer >= 5000) {
//     alert("your discount is " + customer * 10 /100)
    
// }else{
//     alert
//     ("otherwise no discount")
// }
// Q:2                                                             
// var bill = +prompt("enter a your electricity bill unit")
// var billUnit100 = 10;
// var billUnit200 =15;
// var orBillUnit200 =  20;
// if (bill <= 100) {
//     var total =bill *billUnit100;
//  console.log(total);   
// }else if (bill <= 200) {
//     var total = (100 * 10) + (bill -100) * billUnit200;
//     console.log(total); 
// }else if (bill >= 210) {
//     var total = (100 * 10) + (100 * 15) + (bill - 200) * orBillUnit200;
//     console.log(total);
    
// }
// Q:3
// var firstSub = + prompt("enter the Eng marks")
// var secondSub = + prompt("enter the Urdu marks")
// var thirdSub = + prompt("enter the Math marks")
// var obtientMark = firstSub + secondSub + thirdSub;
// console.log(obtientMark);

// var totalMarks = 300;
// var percentage =(obtientMark  / totalMarks) * 100;
// if (percentage >=90 ) {
//     console.log("Your grade is A+");
// } else if (percentage >=80 ) {
//     console.log("Your grade is A");
// } else if (percentage >=70 ) {
//     console.log("Your grade is B");
// } else if (percentage >=60 ) {
//     console.log("Your grade is C");
// } else if (percentage >=50 ) {
//     console.log("Your grade is D");
// }else{
//     console.log("Your grade is fail");
    
// }
// Q:4
// var accountbalance = 50000;
// var amount = + prompt("Enter the amount payment")
// if (amount > accountbalance) {
//     console.log("insufficient Balance");  
// }else if (amount <= 0) {
//     console.log("Invalid Balance");
// }else{
//     if (amount % 500 == 0) {
//         accountbalance = accountbalance - amount;
//         console.log("Transation Suessful");
//         console.log("Remaining Balane" +accountbalance);
        
//     }else{
//         console.log("Please enter an amount in multiples of 500");
        
//     }
// }
// Q:5
// var billing = prompt("Enter Your bill amount")
// var member = prompt("Do you have a membership card ? Yes/No")
// var discount = 0 ;
// if (billing >= 2002) {
//    if (billing >= 5000) {
//     discount = billing * 15 / 100;
//    }if (member == "Yes") {
//     discount = discount + (billing * 5 /100)
//    }
// }else{
//     discount = 0 ;
// }
// var finalbill = billing - discount;
// console.log("OriginalBill:"+ billing);
// console.log("Discount:" + discount);
// console.log("Finalbill" + finalbill);
// Q:6
// var age = +prompt("Enter Your age")
// var day = prompt("Enter day of the week")
// var price = 0;
// if (age < 5) {
//     price = 0 ;
// }else if (age < 12) {
//     price = 300;

// }else if (age < 60) {
//     price = 600 ;

// }else{
//     price = 400 ;

// }if (day == "Wednesday" && age >= 5) {
//     price = price - (price * 20 / 100)
// }alert ("Ticket price Rs. "+ price)

// Q:7
// var package = prompt("How much data package do you need")
// if (package <=5) {
//     alert("Basic package  5 GB - RS. 300")
// }else if (package <= 15) {
//     alert("standary package 15 GB - RS. 600")
// }else if (package <= 30) {
//    alert("premium package 30 GB - RS. 1000") 
// }else{
//     alert("No available package")
// }
// Q:8
// var salary = +prompt("Enter the your salary")
// var experience = + prompt("Enter the your experience")
// var bonus = 0;
// if (salary <= 30000) {
//     bonus = 0;
// }else if (experience >= 5) {
//     bonus = salary * 20 / 100 ;

// }else if (experience >= 3) {
//     bonus = salary * 10 / 100;
// }else {
//     bonus = salary * 5 /100;
// }var finalSalary = salary + bonus ;
// alert ("Bonus :" + bonus)
// alert("Finalsalary : " + finalSalary)
// Q:9
// var order=+prompt("Enter the order amount")
// var city=+prompt("Enter the city")
// var delevrey=0;
// if (order > 5000) {
//     delevrey=0;
// }else if (order >= 2000) {
//     delevrey=150;
// }else{
//     delevrey=250;
// }
// var total =order + delevrey;
// if (city == "Karachi") {
//     delevrey =delevrey -50;
//     if (delevrey < 0) {
//         delevrey =0;
//     }
// }
// alert("Delivrey charges" +delevrey)
//   alert("Total amount " + total)  
//   10
var age=+ prompt("Enter your age")
var salary= +prompt("Enter your monthly salary")
var experience= +prompt("Enter your job experience")
if (age < 21) {
    alert("Loan Reject : age must be 21 or above")
}else if (salary < 50000 ) {
    alert("Loan Rejected : salary must be 50000 or above " )

}else if (experience < 2 ) {
    alert("loan rejected : Experience must be 2 years or above")
}else if (salary > 100000) {
   alert("loan Approved : RS.1000000") 
}else{
    alert("loan Approved : RS .500000")
}

// Q:11
// var buy = 45000;
// var sells = 52000;
// var profit = sells - buy;
// var percentage =  profit / buy * 100;
// alert ("totalproit : "+ profit)
// alert ("profitpercentage :" + percentage)
// Q:12
// var  money = 5000;
// var food =money * 25 / 100;
// var transport = money * 15 /100;
// var  total =food +transport;
// var remaining = money -total;
// alert("money spent on food" + food)
// alert ("money spent on transport" + transport)
// alert ("total expences" +total)
// alert ("remaining money"+ remaining)
// Q:13
// var distance = 180;
// var hour = 3;
// var speed = distance /hour;
// alert ("Averagespeed : " +speed +"km/h" )

// Q:14
// var age = +prompt("enter your currenrt age")
// var person = age + 15;
// alert ("Your age after 15 years old" +person)
// Q:15
// var productstoke =100;
// productstoke = productstoke - 5;
// productstoke =productstoke - 5;
// productstoke =productstoke - 5;
// productstoke = productstoke- 5;
// productstoke = productstoke- 5;
// productstoke = productstoke- 5;
// productstoke =productstoke - 5;
// alert ("remaining stoke" + productstoke)
// Q:16
// var numberChecker = + prompt("Enter a number")
// if (numberChecker > 0) {
//     alert("Number is positive")
// }else if (numberChecker < 0) {
//     alert("Number is negative")
// }else{
//     alert("Number is zero")
// }
