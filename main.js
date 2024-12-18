// first task

for(let i=1; i<10 ; i++){
    if(i%2==1){
        console.log(i);
    }
}


// second task

for (let x=1; x<=40 ; x++){
    if( x % 3== 0 && x % 5== 0){
        console.log("FizzBuzz");
    }    
    else if( x % 5== 0){
        console.log("Buzz");
    }
    else if( x % 3== 0 ){
        console.log("Fizz");
    }
    else {
        console.log(x);
    }
}