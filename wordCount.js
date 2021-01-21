var spece="I am    a Computer Engineer. I am a boy.";
var count = 0;
for(var i=0; i<spece.length; i++){
    if(spece[i]==" " && spece[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);