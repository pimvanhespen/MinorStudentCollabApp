var stored = null;

KEY_DATA = "kees-data";
KEY_UPDATE = "kees-update";

function lastStore(){
	return sessionStorage.getItem(KEY_UPDATE);
}

function getStoredData(){
	return JSON.parse(sessionStorage.getItem(KEY_DATA));
}

function setStoredData(object){
	var str = JSON.stringify(object);
	var now = Date.now();

	sessionStorage.setItem(KEY_DATA, str);
	sessionStorage.setItem(KEY_UPDATE, now);
}