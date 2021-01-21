var name = [4, 6, 2, 3, 2, 1, 5, 7, 5, 3, 1, 9, 10, 12, 12, 11];
var uniqueName = [];
for(var i=0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);

