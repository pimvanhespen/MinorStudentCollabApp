// placehlders for generated data.
var vakdata = new Array();
var studenten = new Array();

// constants
var DEBUG = false;
var DOCENT_NAAM = "Kees";
var MAX_OPGAVEN = 3;

function status(text, icon){
	return {
		"text": text,
		"icon": icon,
	};
}

var STATUS_NIET_BEGONNEN = status("niet begonnen","&#x2715;");
var STATUS_BEGONNEN = status("begonnen","&#128187;");
var STATUS_AFGEROND = status("afgerond","&#127937;");
var STATUS_HULPVRAAG = status("hulpvraag","&#128565;");


var VAK_NAMEN = [
	'Onwerpen',
	'Buitenspelen',
	'Internetten'
];

var STUDENT_NAMEN = [
	'Anna',
	'Bert',
	'Caro',
	'Derk',
	'Eddy',
	'Fien',
	'Geer',
	'Henk',
	'Iske',
];

console.log(USERNAME);
STUDENT_NAMEN.push(USERNAME);

// helper functions
function calcStatus(current, max) {
	if( current < max )
		return STATUS_AFGEROND;
	if( current > max )
		return STATUS_NIET_BEGONNEN;
	// schijn randomness
	return Math.random() > 0.5 ? STATUS_BEGONNEN : STATUS_HULPVRAAG;
}

function generateProgress(student, opgave){
	return	{
		"naam": student["naam"],
		"status": calcStatus(opgave, student["voortgang"]), 
	};
}

// script execution starts 

// Generate student objects
for(naam of STUDENT_NAMEN){
	var student = {
		"naam": naam, 
		"voortgang": Math.floor(Math.random() * 3),
	};
	studenten.push(student);
}

// Populate the 'vakdata' list with information about each 'vak'
for(vaknaam of VAK_NAMEN){

	// generate 'opgaven'
	var opgaven = new Array();
	for (var i = 1; i <= MAX_OPGAVEN; i++) {
		var naam = "opgave " + i;

		// generate progress for current 'opgave'
		var studentenVoortgang = new Array();
		for( student of studenten ){
			
			var studentVoortgang = generateProgress(student, i);
			studentenVoortgang.push(studentVoortgang);
		}

		var opgave = {
			"naam":  naam,
			"details": "Lorem ipsum dolor sit amet...",
			"studentVoortgang": studentenVoortgang,
		};
		opgaven.push(opgave);
	}

	var vak = {
		"naam": vaknaam,
		"docent_naam": DOCENT_NAAM,
		"opgaven": opgaven,
	};

	vakdata.push(vak);
}

localStorage.setItem("vak-data", JSON.stringify(vakdata));

console.log(vakdata);

// debug only
function htmlLog(str){
	$('#logging').show();
	$('#logging').append("<br>").append("<code style='white-space: pre;'>" + str + "</code>");	
}

function pretty(obj){
	return JSON.stringify(obj, null, 2);
}
