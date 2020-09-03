console.log('opgaven.js');

$(function(){
	var text = localStorage.getItem("vak-data");
	var data = JSON.parse(text);
	
	for(vak of data){
		$("#opgaven").append(vak.naam + "\n");
		for(opgave of vak["opgaven"]){
			$("#opgaven").append("\t" + opgave.naam + "\n");
		}
	}
});