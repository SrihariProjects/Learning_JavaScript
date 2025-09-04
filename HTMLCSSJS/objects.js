// var myCar=new Car();
var myString=new String();
myString="hello";

document.writeln(myString.length); 
myString.toLowerCase();


var myCar=new Object();
myCar.name=RollsRoyce;
myCar.driver="John";
myCar.price=1000000;

myCar.driver= function(){
    console.log("now driving");
};

myCar.driver();

var myCar2={name:"BMW",driver:"Smith",price:50000,
drive:function(){
    console.log("now driving");
}

};

//this
//It acts like a constructor
//It refers to the current object
//It can be used inside a method to refer to the current object
var myCar3={name:"ferrari",driver:"Kush",
    test:function(){
        console.log(this);//it will print the object data
        console.log(this.name);//it will print name of the car in the current Object
    }
};

// var myArray=new Array();
// var myString =new String();



var Car = function(maxSpeed,driver){
    this.maxSpeed=maxSpeed;
    this.driver=driver;
}

var myCar=new Car(200,"John");
var myCar2=new Car(300,"Smith");


