console.log('opgaven.js');

$(function(){
	$.getJSON('./data-full.json', function(data){
		console.log("opgaven, inner");
		console.log(data);
	});
});