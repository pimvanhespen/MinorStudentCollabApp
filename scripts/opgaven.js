console.log('opgaven.js');

CURRENT_OPGAVE = null;


function opgaveListHTML(opgave, vak){
	var html = "<div class=\"opgave\" data-opgave='"+ opgave.naam +"' data-vak='"+ vak.naam +"' ><a href=\"javascript:void(0)\">" + opgave.naam + "</a></div>";
	return html;
}

function vakListHTML(vak){
	return "<h5>" + vak.naam +  "</h5>";
}

function findVakOpgaveDetails(vakNaam, opgaveNaam){
	var data = getStoredData();

	for(vak of data){
		if(vak.naam !== vakNaam){
			continue;
		}

		for(opgave of vak.opgaven){
			if (opgave.naam === opgaveNaam) {
				return opgave;
			}
		}
	}

	return null;
};

function studentListHTML(student){
	// console.log(student);
	return '<tr class="student" data-contact="'+ student.contact +'"><td>' + student.naam + '</td><td>' + student.status.icon + ' (' + student.status.text + ')</td></tr>';
}

function reload(){
	showOpgaveDetails(CURRENT_OPGAVE);
}

function showOpgaveDetails(opgave){
	CURRENT_OPGAVE = opgave;
	$("#opgave-naam").text(opgave.naam);
	$("#opgave-details").text(opgave.details);


	var studentlijst = $("#studentlijst");
	console.log(studentlijst);
	studentlijst.empty();

	for(student of opgave.studentVoortgang){
		var studentHtml = studentListHTML(student);
		studentlijst.append(studentHtml);
	}

	$(".student").click(function(event){
		var parentRow = $(event.target).parent();
		console.log(parentRow);
		var targetContact = parentRow.data('contact');
		window.prompt('', targetContact);
	});
};

$(function(){
	var data = getStoredData();
	
	var container = $("#opgaven-container");
	container.empty();

	for(vak of data){
		container.append(vakListHTML(vak));
		for(opgave of vak["opgaven"]){
			var html = opgaveListHTML(opgave, vak);
			container.append(html);
		}
	}

	$(".opgave").click(function(event){
		var vak = $(this).data('vak');
		var opgave = $(this).data('opgave');

		// toon details
		var details = findVakOpgaveDetails(vak, opgave);
		showOpgaveDetails(details);
	});
});