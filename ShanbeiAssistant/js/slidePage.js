(function addBt(){
    // var docfrag = document.createDocumentFragment();
    var bt1 = document.createElement('div'),
        bt2 = document.createElement('div');
    bt1.className = "shanbei-slide-bt";
    // bt1.innerHTML = "<span style='display:block;width:0;height:0;border-width:0 50px 50px;border-style:solid;border-color:transparent transparent rgba(255, 204, 0, 0.3);position:absolute;top:0px;left:0px;'></span>";
    // bt2.innerHTML = "<span style='display:block;width:0;height:0;border-width:50px 50px 0;border-style:solid;border-color:rgba(255, 204, 0, 0.3) transparent transparent;position:absolute;top:0px;left:0px;'></span>";
    bt2.className = "shanbei-slide-bt";
    bt1.setAttribute('style',"width:0;height:0;border-width:0 50px 50px;border-style:solid;border-color:transparent transparent rgba(255, 204, 0, 0.3);position:fixed;right:20px;top:50%;z-index:9999;");
    bt2.setAttribute('style',"width:0;height:0;border-width:50px 50px 0;border-style:solid;border-color:rgba(255, 204, 0, 0.3) transparent transparent;position:fixed;right:20px;top:75%;z-index:9999;");
    document.body.appendChild(bt1);
    document.body.appendChild(bt2);
})();
var windowHeight = window.innerHeight;
var shanbeiSlideBt = document.getElementsByClassName('shanbei-slide-bt');
shanbeiSlideBt[1].onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    window.scrollTo(0,windowHeight+window.scrollY);
}
shanbeiSlideBt[0].onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    window.scrollTo(0,window.scrollY-windowHeight);
};
shanbeiSlideBt[0].onmouseover = function(){
        this.style.borderColor = "transparent transparent rgba(255, 204, 0, 1)";
};
shanbeiSlideBt[0].onmouseout = function(){
        this.style.borderColor = "transparent transparent rgba(255, 204, 0, 0.3)";
};
shanbeiSlideBt[1].onmouseover = function(){
        this.style.borderColor = "rgba(255, 204, 0, 1) transparent transparent";
};
shanbeiSlideBt[1].onmouseout = function(){
        this.style.borderColor = "rgba(255, 204, 0, 0.3) transparent transparent";
};
