document.onmouseup = function(e){
    // console.log(window.getSelection().toString());
    var word = window.getSelection().toString();
    getTranslate(word);
}
function getTranslate(word){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',"https://api.shanbay.com/bdc/search/?word="+word+"",true);
    xhr.onload = function(){
        if(xhr.status == 200){
            var data = JSON.parse(xhr.responseText);
            var wordsAss = new WordsContent();
            wordsAss.msg = data.msg;
            wordsAss.words = data.data.content;
            wordsAss.usaudio = data.data.us_audio;
            wordsAss.pron = data.data.pronunciation;
            wordsAss.def = data.data.definition;
            if(data.msg=="无效查询词"||data.msg=="查询的词过长"||"未找到的单词"){
            }
            console.log(wordsAss);
            wordsAss.init();
            document.body.addEventListener('click',function(){
                wordsAss.remove();
            });
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
    definition: "",
    init: function(){
        var shanbeiWords = document.createElement('div');
        shanbeiWords.id = "shanbei-words";
        var docfrag = document.createDocumentFragment();
        var divContent = document.createElement('div');
        divContent.innerHTML = "<div id='words-title'><img src='' alt=''class='words-logo' id='shanbeiLogo'><span class='title-words'></span><span class='title-words'></span><a href='' class='words-link'>详细</a><span id='words-close'>X</span></div><div id='words-body'><div id='words-tab'><span class='basic-title'>基本释义</span></div><div id='words-content'><span id='words-def'></span></div></div>";
        docfrag.appendChild(divContent);
        shanbeiWords.appendChild(docfrag);
        document.body.appendChild(shanbeiWords);
    },
    remove: function(){
        document.body.removeChild(document.getElementById('shanbei-words'));
    }
}
// WordsContent.init = function(){
//     var shanbeiWords = document.createElement('div');
//     shanbeiWords.id = "shanbei-words";
//     var docfrag = document.createDocumentFragment();
//     var divContent = document.createElement('div');
//     divContent.innerHTML = "<div id='words-title'><img src='' alt=''class='words-logo' id='shanbeiLogo'><span class='title-words'></span><span class='title-words'></span><a href='' class='words-link'>详细</a><span id='words-close'>X</span></div><div id='words-body'><div id='words-tab'><span class='basic-title'>基本释义</span></div><div id='words-content'><span id='words-def'></span></div></div>";
//     docfrag.appendChild(divContent);
//     shanbeiWords.appendChild(docfrag);
//     document.body.appendChild(shanbeiWords);
// }
// WordsContent.remove = function(){
//     document.body.removeChild(document.getElementById('shanbei-words'));
// }
