(()=>{

function removeVolwes(data:String){
    
    return data.replace(/[aeiou]/gi,'');
}

console.log("The text without values is: ",removeVolwes("This is a manner to remove volwes"));

})()
