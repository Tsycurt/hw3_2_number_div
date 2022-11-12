function twoNumDiv(){
    let num = []
    while (num.length < 2 ){
        num.push(Number(prompt("please enter 2 numbers")));
}
if(num[0]%num[1]!=0){
    alert("there is a remainder");
}
else{
    alert("there is no remainder");
}
}