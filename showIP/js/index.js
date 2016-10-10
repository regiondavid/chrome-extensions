function httpRequest(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.open('GET',url,true);
	xhr.onreadystatechange = function(){
		if (xhr.readyState==4) {
			// if ((xhr.status>=200 && XHR.status < 300) || XHR.status == 304) {
				callback(xhr.responseText);
			// }
		}
	}
	xhr.send(null);
}
httpRequest('http://sneezryworks.sinaapp.com/ip.php',function(ip){
	document.getElementById("ip_div").innerText = ip;
})