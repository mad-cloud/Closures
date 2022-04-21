//Q1.
    1//On calling counter()
    1
    2
    3
    4
//       return counter += 1;
     
// var counter1 = counter();
// alert(counter1());
// alert(counter1());
// alert(counter1());
// alert(counter1());

//Q2.
2//setTimout will execute after completion of for loop since it is used to perform asynchronous operations, so it will take las  value of i

//Q3.
let outerFun=(len)=>{
    let rectangleArea=(brea)=>{
        console.log("Area of Rectangle is "+ (len*brea));
    }
    return rectangleArea;
}
let res=outerFun(5);
 res(4);

//Q.4
let out=()=>{
    let count=0;
       let inner=()=>{
           console.log(++count);
       }
    return inner;   
}
let res2=out();
res2();

//Q5. 
12  

//Q6.
12

//Q7.
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
