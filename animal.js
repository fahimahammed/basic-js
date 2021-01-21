function animalCount(depth){
    if(depth <= 10){
        var animal= depth*50;
    }
    else if(depth <= 20){
        var firstPart= 10 * 50;
        var secoundPart= (depth-10)*100;
        var animal=firstPart+secoundPart;
    }
    else{
        var firstPart = 10*50;
        var secoundPart= 10*100;
        var thirdPart = (depth-20)*300;
        var animal= firstPart+secoundPart+thirdPart;
    }
    return animal;
}

var depthOfJangle = animalCount(56);
console.log(depthOfJangle);