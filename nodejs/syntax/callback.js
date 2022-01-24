function a(){
    console.log('A');
}


var b = function (){
    console.log('b');
}



function slowfunc(callback){
    callback();
    callback();
};


slowfunc(a);