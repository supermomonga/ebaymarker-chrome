
function get_local_storage(key, def){
	var result = localStorage[key];
	if( result ){
		return result;
	}
	else{
		return def;
	}
}

function $(id) {
  return document.getElementById(id);
}


function save_options(){
	localStorage["ebaymarker_positive_words"] = $("ebaymarker_positive_words").value;
	localStorage["ebaymarker_negative_words"] = $("ebaymarker_negative_words").value;
	localStorage["ebaymarker_normal_words"]   = $("ebaymarker_normal_words").value;
}

function load_options(){
	var name = get_local_storage("fldUserName", "homu");
	$("ebaymarker_positive_words").value = get_local_storage("ebaymarker_positive_words" , "");
	$("ebaymarker_negative_words").value = get_local_storage("ebaymarker_negative_words" , "");
	$("ebaymarker_normal_words").value   = get_local_storage("ebaymarker_normal_words"   , "");
}

function setup(){
	var saveButtonNode = $('save-button');
	saveButtonNode.onclick = save_options;
}

setup();
load_options();


