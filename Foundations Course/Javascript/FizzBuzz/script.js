
function fizzBuzz(){
    let num = prompt("enter a number between 1 and 100");
    let list = [];
    
    while(num < 1 || num > 100 || isNaN(num) == true){
        let message = 'Parameter is not between 1 and 100!' ;
        alert(message);
        //throw new Error(message);   
        num = prompt("enter a number between 1 and 100");     
    }
    for(let i = 1; i <= num;i++){
        let res = i
        if(i % 3 === 0 && i % 5 === 0){
            res = "FizzBuzz ";
            list += [res];
           
        }else if(i % 5 === 0){
            res = "Buzz ";
            list += [res];
           
        }else if(i % 3 === 0){
            res = "Fizz ";
            list += [res];
            
        }else{
            res = i + " ";
            list += [res];
        }
        
    }
    return(list);
}


console.log(fizzBuzz());