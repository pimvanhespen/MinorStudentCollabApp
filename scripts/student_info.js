console.log('student_info.js');

$(function(){
	var text = localStorage.getItem("vak-data");
	var data = JSON.parse(text);
	
	for(vak of data){
		$("#student_info").append(vak.naam + "\n");
		for(opgave of vak["opgaven"]){
			for(item of opgave["studentVoortgang"]){
				if( item["naam"] !== USERNAME){
					continue;
				}
				$("#student_info").append("\t" + opgave.naam + "\t" + item.status.text + "\t" + item.status.icon + "\n");
			}
		}
	}
});