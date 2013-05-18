

function $(id) {
  return document.getElementById(id);
}


function save_options(){
  options = {
    "ebaymarker_positive_words" : $("ebaymarker_positive_words").value,
    "ebaymarker_negative_words" : $("ebaymarker_negative_words").value,
    "ebaymarker_normal_words"   : $("ebaymarker_normal_words").value
  };
  chrome.storage.local.set(options, function(){
    window.alert("Saved.");
  });
}

function load_options(){
  keys = [
    "ebaymarker_positive_words", "ebaymarker_negative_words", "ebaymarker_normal_words"
  ];
  chrome.storage.local.get(keys, function(values){
    $("ebaymarker_positive_words").value = values["ebaymarker_positive_words"];
    $("ebaymarker_negative_words").value = values["ebaymarker_negative_words"];
    $("ebaymarker_normal_words").value   = values["ebaymarker_normal_words"];
  });
}

function setup(){
	var saveButtonNode = $('save-button');
	saveButtonNode.onclick = save_options;
}

setup();
load_options();


