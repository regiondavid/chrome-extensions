var city = localStorage.city || "chengdu";
document.getElementById('city').value = city;
document.getElementById('save').onclick = function (){
	localStorage.city = document.getElementById('city').value;
	console.log("保存成功");
}