(function(){
    var midAlert = document.getElementsByClassName('fsrFloatingContainer'),
    topAd = document.getElementsByClassName('top-banner-ad-container'),
    rightTab = document.getElementsByClassName('content__secondary-column'),
    element = document.getElementsByClassName('element'),
    topLeftLabel = document.getElementsByClassName('content__labels'),
    contentFoot = document.getElementsByClassName('content-footer'),
    lFooter = document.getElementsByClassName('l-footer'),
    inlineAd = document.getElementsByClassName('ad-slot--inline'),
    contentBody = document.getElementsByClassName('content__article-body'),
    setMessage = document.getElementsByClassName('site-message'),
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
            ele.setAttribute("style","display: none");
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
    if(setMessage.length){
        setMessage[0].style.display = "none";
    }
    if(inlineAd.length){
        contentBody[0].removeChild(inlineAd[0]);
    }
})();
var adInline = document.getElementsByClassName('ad-slot'),
    topAd = document.getElementById('dfp-ad--top-above-nav'),
    contribution = document.getElementsByClassName('contributions__epic');
setTimeout(function(){
    if(topAd){
        topAd.style.display = "none";
    }
    if(contribution.length){
        contribution[0].style.display = "none";
    };
    [].forEach.call(adInline,function(ele){
            ele.style.display = "none";
    });
},2000);
setTimeout(function(){
    if(topAd){
        topAd.style.display = "none";
    }
    if(contribution.length){
        contribution[0].style.display = "none";
    };
    [].forEach.call(adInline,function(ele){
        ele.style.display = "none";
    });
},4000);
setTimeout(function(){
    if(topAd){
        topAd.style.display = "none";
    }
    if(contribution.length){
        contribution[0].style.display = "none";
    };
    [].forEach.call(adInline,function(ele){
        ele.style.display = "none";
    });
},10000);
