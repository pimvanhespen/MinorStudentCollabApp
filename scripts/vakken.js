console.log('vakken.js');

$(function(){
	var text = localStorage.getItem("vak-data");
	var data = JSON.parse(text);
	
	for(vak of data){
		$("#vakken").append(vak.naam + "\n");
	}

	// alternative
	// var progressAPI = "https://raw.githubusercontent.com/pimvanhespen/MinorStudentCollabApp/support-scripts/scripts/data-full.json";
	// $.getJSON(progressAPI, function(data){
	// 	for(vak of data){
	// 		$("#vakken").append(vak.naam + "\n");
	// 	}
	// });
});