function httpRequest( url, callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url,true);
	xhr.onreadystatechange = function (){
		if(xhr.readyState == 4){
			if(xhr.status >=200 && xhr.status <30	0 || xhr.status == 302){
				callback(xhr.responseText);
			}
		}
	}
	xhr.send();
}