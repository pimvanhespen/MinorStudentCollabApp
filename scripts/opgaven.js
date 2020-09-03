console.log('opgaven.js');


function opgaveListHTML(opgave, vak){
	var html = "<div class=\"opgave\"><a data-opgave='"+ opgave.naam +"' data-vak='"+ vak.naam +"' href=\"javascript:void(0)\">" + opgave.naam + "</a></div>";
	return html;
}

function vakListHTML(vak){
	return "<h5>" + vak.naam +  "</h5>";
}

$(function(){
	var text = localStorage.getItem("vak-data");
	var data = JSON.parse(text);
	
	var container = $("#opgaven-container");
	container.empty();

	for(vak of data){

		container.append(vakListHTML(vak));
		for(opgave of vak["opgaven"]){
			var html = opgaveListHTML(opgave, vak);
			container.append(html);
		}
	}

	$(".opgave").click(function(){
		var vak = $(this).data('vak');
		var opgave = $(this).data('opgave');

		alert("" + vak + ", " + opgave);

		// toon details
	});
});