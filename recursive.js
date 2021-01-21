function recursive(num){
    if(num == 1){
        return 1;
    }
    else{
        return num * recursive(num-1);
    }
}

var fact = recursive(5);
console.log(fact);