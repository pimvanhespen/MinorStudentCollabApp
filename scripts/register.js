var userId = "#username";
var contactId = "#contact_info";

$(function(){
	var username = window.prompt("Wat is je naam?");
	var contact	= window.prompt("Hoe kan men je bereiken?");

	$(userId).text(username);
	$(contactId).text(contact);
});