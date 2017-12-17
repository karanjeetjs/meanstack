// var a = [];
// var b = {'name':'rakesh','roll':'101'};
// a.push(b);
// console.log(Object.keys(b));
// console.log(Object.values(b));
// console.log(a);
var newArray = {'name':'rakesh','roll':'101'};
newArray.forEach(function(item){
	for (var i in item){
		obj[i] = item[i];
	}

 });
	console.log(items);
// var object = {};
// object.name = 'broadway';
// object.roll = '101';
// object.class = 'js';
// object.nextobj = {'hello':'world'};
// console.log(object.nextobj.hello);