/*
 * Copyright Alinlin Liou 2015
 */

chrome.commands.onCommand.addListener(function(command){
	// TODO: improve chrome.tabs.executescript passing parameters
	if (command == "pron-uk") {
		chrome.tabs.executeScript({
    		code: 'document.getElementsByClassName("pron-uk")[0].click()'	
  		});
	}else if (command == "pron-us") {
		chrome.tabs.executeScript({
    		code: 'document.getElementsByClassName("pron-us")[0].click()'	
  		});
	}else{
		console.log(command);
	}
});