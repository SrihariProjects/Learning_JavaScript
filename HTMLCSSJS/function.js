
function getAverage(a,b,c,d){

    var average=(a+b+c+d)/4;//local variable
    console.log(average);

    return average;

}

// function alert(string){

// }
getAverage(4,5,5,6);

var res=getAverage(10,20,30,40);//global variable
console.log(res);
// alert("Hello World");

function logResult(){
    console.log("Result Logged"+res); //we are using the globla variable here
}

logResult(); //we can call the function
