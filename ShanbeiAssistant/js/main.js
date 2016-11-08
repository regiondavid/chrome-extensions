var a = 3;
console.log(a);
var midAlert = document.getElementsByClassName('fsrFloatingContainer'),
    topAd = document.getElementsByClassName('top-banner-ad-container'),
    rightTab = document.getElementsByClassName('content__secondary-column'),
    element = document.getElementsByClassName('element'),
    topLeftLabel = document.getElementsByClassName('content__labels'),
    contentFoot = document.getElementsByClassName('content-footer'),
    lFooter = document.getElementsByClassName('l-footer'),
    inlineAd = document.getElementsByClassName('ad-slot--inline'),
    contentBody = document.getElementsByClassName('content__article-body'),
    contentMeta = document.getElementsByClassName('content__meta-container');
if(midAlert.length){
    midAlert[0].style.display = "none";
}
if(topAd.length){
    topAd[0].style.display = "none";
}
if(rightTab.length){
    rightTab[0].style.display = "none";
}
if(element.length){
    [].forEach.call(element,function(ele){
        ele.setAttribute("style","opacity: 0");
    });
}
if(topLeftLabel.length){
    topLeftLabel[0].style.display = "none";
}
if(contentMeta.length){
    contentMeta[0].style.display = "none";
}
if(contentFoot.length){
    contentFoot[0].style.display = "none";
}
if(lFooter.length){
    lFooter[0].style.display = "none";
}
if(inlineAd.length){
    console.log(2333);
    contentBody[0].removeChild(inlineAd[0]);
}
