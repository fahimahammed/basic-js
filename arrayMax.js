var marks=[23, 45, 56, 78, 54, 67, 89, 87, 90];
var max = marks[0];
for(var i=0; i< marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
    
}
console.log("Maximum number is: ", max);