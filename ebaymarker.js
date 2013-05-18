

function setmarker(words, cssclass){
    words.split('\n').forEach(function(word){
      if(word != ''){
        document.body.innerHTML=document.body.innerHTML.replace(new RegExp('(>[^<]*)' + word + '([^<]*<)', 'ig'),'$1<span class="ebaymarker-' + cssclass + '">' + word + '</span>$2');
      }
    });
}

function setmarkers(words){
    setmarker(words["ebaymarker_positive_words"], 'positive');
    setmarker(words["ebaymarker_negative_words"], 'negative');
    setmarker(words["ebaymarker_normal_words"  ], 'normal');
}


keys = [
"ebaymarker_positive_words", "ebaymarker_negative_words", "ebaymarker_normal_words"
];
chrome.storage.local.get(keys, setmarkers);

