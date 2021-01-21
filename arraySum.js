function getArraySum(marks){
    var sum=0;
    for(var i=0; i<marks.length; i++){
        sum = sum + marks[i];
    }
    return sum;
}

var marks=[24, 45, 67, 89, 65, 54];
var result=getArraySum(marks);
var result2 = getArraySum([34, 56, 5, 43]);
console.log(result);
console.log(result2);