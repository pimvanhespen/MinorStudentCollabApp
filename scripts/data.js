// placehlders for generated data.
var vakdata = new Array();
var studenten = new Array();

// constants
var DEBUG = false;
var DOCENT_NAAM = "Kees";
var MAX_OPGAVEN = 3;

var STATUS_NIET_BEGONNEN = "niet begonnen";
var STATUS_BEGONNEN = "begonnen";
var STATUS_AFGEROND = "afgerond";
var STATUS_HULPVRAAG = "hulpvraag";


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

// helper functions
function calcStatus(current, max) {
	if( current < max )
		return STATUS_AFGEROND;
	if( current > max )
		return STATUS_NIET_BEGONNEN;
	// schijn randomness
	return Math.random() > 0.5 ? STATUS_BEGONNEN : STATUS_HULPVRAAG;
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
			
			var studentVoortgang = {
				"naam": student["naam"],
				"status": calcStatus(i, student["voortgang"]), 
			}

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
		"DOCENT_NAAM": DOCENT_NAAM,
		"opgaven": opgaven,
	};

	vakdata.push(vak);
}

// debug only
function htmlLog(str){
	$('#logging').show();
	$('#logging').append("<br>").append("<code style='white-space: pre;'>" + str + "</code>");	
}

function pretty(obj){
	return JSON.stringify(obj, null, 2);
}

if(DEBUG){
	htmlLog(pretty(studenten));
	htmlLog(pretty(vakdata));
}