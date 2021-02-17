// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
//solution 1
let multiplyNumb = numbers.map(function multiplyby100(numb){
    return numb * 100;
})
//solution 2
let multiplyNumb = numbers.map(function(numb){
    return numb * 100;
})

//solution 3
let multiplyNumb = numbers.map(function(numb){
    return numb * 100;   
})

//solution 4
let multiplyNumb = numbers.map(numb =>{
    return numb * 100; 
})

//solution 5
let multiplyNumb = numbers.map(numb => numb * 100)


console.log (multiplyNumb);
