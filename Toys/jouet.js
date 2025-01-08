
let text = prompt("enter your message to cypher");


function parse(){
    let secret = prompt("enter the secret")
    let list = [];  
    let res = []  
    let msg = text;
    msg.split("").forEach((letters)=>list[letters] = letters );
    for(let i = 0; i < list.length ; i++){
        if((parseInt(list[i],36)-9 + secret) < 26 ){
            list[i] =  (parseInt(list[i],36)-9 + secret);
            console.log(res);
        }else{
            list[i] = (parseInt(list[i],36)-9 + secret) - 26 ;
        }

        //console.log(res);
    }
    for(let j = 0; j < res.length; j++){
        res[j] = (res[j]).toString(36);
    }
    

    //console.log(res);
}

parse();