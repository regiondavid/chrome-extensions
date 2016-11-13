(function addStyle(){
    var style = document.createElement('style');
    var audio = document.createElement('audio');
    var docfrag = document.createDocumentFragment();
    style.innerHTML = "#shanbei-words{background-color:#fff;position:absolute;z-index:2147483647;border: solid rgb(184, 182, 182) 2px;padding-bottom: 2px;}#shanbei-words #words-title{background-color:#00B839;color:#fff}#shanbei-words #words-title a{color:#fff;font-size:20px;line-height:25px;text-decoration:none;margin-left:15px;margin-right:20px;}.clear-fix{clear:both;*zoom:1}.clear-fix::before,.clear-fix::after{content:'';display:table}#words-tab{margin-left:5px;}#words-content{margin-left:25px;padding-bottom:10px;}.title-words{margin-left:10px;}#words-close{position:absolute;right:0;}";
    docfrag.appendChild(style);
    document.body.appendChild(docfrag);
    document.body.appendChild(audio);
})();
document.body.addEventListener('click',function(e){
    // e.stopPropagation();
    // e.preventDefault();
    // console.log(6666);
    var mainShanbei = document.getElementById('shanbei-words');
    if(document.getElementById('shanbei-words'))document.getElementById('shanbei-words').parentNode.removeChild(document.getElementById('shanbei-words'));
    var word = window.getSelection().toString();
    if(mainShanbei){
        // console.log(332);
        document.body.removeChild(mainShanbei);
        if(word) getTranslate(word,e);
    // console.log(mainShanbei);
    } else if(word) getTranslate(word,e);
},false);
if(document.getElementById('shanbei-words')){
    document.getElementById('shanbei-words').addEventListener('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        console.log(2333);
        return false;
    },false);
}
function getTranslate(word,e){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',"https://api.shanbay.com/bdc/search/?word="+word+"",true);
    xhr.onload = function(){
        if(xhr.status == 200){
            var data = JSON.parse(xhr.responseText);
            // console.log(data);
            var wordsAss = new WordsContent();
            wordsAss.msg = data.msg;
            wordsAss.words = data.data.content;
            wordsAss.usaudio = data.data.us_audio;
            wordsAss.pron = data.data.pronunciation;
            wordsAss.def = data.data.definition;
            wordsAss.url = data.data.url;
            if(data.msg=="无效查询词"||data.msg=="查询的词过长"||"未找到的单词"){
            }else{

            // if(word){
                wordsAss.init();
                document.getElementById('shanbei-words').style.left = e.clientX+'px';
                document.getElementById('shanbei-words').style.top = document.body.scrollTop+e.clientY+3+'px';
                var shanbeiTitleWords = document.getElementsByClassName('title-words');
                shanbeiTitleWords[0].innerText = wordsAss.words;
                shanbeiTitleWords[1].innerText = '['+wordsAss.pron+']';
                document.getElementsByClassName('words-link')[0].href=wordsAss.url;
                document.getElementById('words-def').innerText = wordsAss.def;
            // }

            }
            // console.log(wordsAss);
        }
    }
    xhr.send();
}
function WordsContent(){};
WordsContent.prototype = {
    constructor: WordsContent,
    words: "",
    msg: "",
    usaudio: "",
    pron: "",
    url: "",
    definition: "",
    init: function(){
        var shanbeiWords = document.createElement('div');
        shanbeiWords.id = "shanbei-words";
        var docfrag = document.createDocumentFragment();
        var divContent = document.createElement('div');
        divContent.innerHTML = "<div id='words-title'><img src='' alt=''class='words-logo' id='shanbeiLogo'><span class='title-words'></span><span class='title-words'></span><span class='title-words'>读音</span><a href='' class='words-link' target='_blank'>详细</a><span id='words-close'>X</span></div><div id='words-body'><div id='words-tab'><span class='basic-title'>基本释义</span></div><div id='words-content'><span id='words-def'></span></div></div>";
        docfrag.appendChild(divContent);
        shanbeiWords.appendChild(docfrag);
        document.body.appendChild(shanbeiWords);
    },
    remove: function(){
        document.body.removeChild(document.getElementById('shanbei-words'));
    }
}
