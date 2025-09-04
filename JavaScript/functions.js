function myFunction(p1,p2) {
    return p1*p2;
}

let result = myFunction(5,7)
document.getElementById("demo").innerHTML = "the result is: "+result


function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
document.getElementById("demo2").innerHTML = "The value in Celsius is:"+value;