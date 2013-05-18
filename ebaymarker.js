function get_local_storage(key, def){
  var result = localStorage[key];
  if( result ){
    return result;
  }
  else{
    return def;
  }
}


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if ( changeInfo.status == "complete" ) {
    chrome.tabs.insertCSS(null, { "file": "ebaymarker.css" });
    words = {};
    words['positive'] = get_local_storage("ebaymarker_positive_words", "").split("\n");
    words['negative'] = get_local_storage("ebaymarker_negative_words", "").split("\n");
    words['normal']   = get_local_storage("ebaymarker_normal_words", "").split("\n");
    words['positive'].forEach(function(word){
      script = "document.body.innerHTML=document.body.innerHTML.replace(new RegExp('" + word + "', 'ig'),'<span class=\"ebaymarker-positive\">" + word + "</span>');focus();";
      chrome.tabs.executeScript(null, { "code" : script });
      console.log("positive : " + word);
    });
    words['negative'].forEach(function(word){
      script = "document.body.innerHTML=document.body.innerHTML.replace(new RegExp('" + word + "', 'ig'),'<span class=\"ebaymarker-negative\">" + word + "</span>');focus();";
      chrome.tabs.executeScript(null, { "code" : script });
      console.log("negative : " + word);
    });
    words['normal'].forEach(function(word){
      script = "document.body.innerHTML=document.body.innerHTML.replace(new RegExp('" + word + "', 'ig'),'<span class=\"ebaymarker-normal\">" + word + "</span>');focus();";
      chrome.tabs.executeScript(null, { "code" : script });
      console.log("normal : " + word);
    });
  }
});

