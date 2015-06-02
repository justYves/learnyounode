var num = process.argv.slice(2); 

var sum = num.reduce(function(a,b){
	return Number(a) + Number(b) ; 
});

console.log(sum);

