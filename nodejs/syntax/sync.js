var fs = require('fs');


// var result = fs.readFileSync('./sample.txt','utf8');

// console.log(result)



console.log('A');
fs.readFile('./sample.txt','utf8',function(err,result){
    console.log(result)
});

console.log('C');
