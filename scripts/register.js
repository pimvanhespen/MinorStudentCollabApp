var userId = "#username";
var contactId = "#contact_info";

USERNAME = window.prompt("Wat is je naam?");
CONTACT_INFO = window.prompt("Hoe kan men je bereiken?");

$(function(){
	$(userId).text(USERNAME);
	$(contactId).text(CONTACT_INFO);
});