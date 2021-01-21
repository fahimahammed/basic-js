function reverse(statement){
    var reverseStatement="";
    for(var i=0; i<statement.length; i++){
        var char = statement[i];
        reverseStatement = char + reverseStatement;
    }
    return reverseStatement;
}

var str = "Fahim Ahammed Firoz";
var reverseStr= reverse(str);
console.log(reverseStr);