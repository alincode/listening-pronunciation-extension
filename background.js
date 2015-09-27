/*
 * Copyright AiLin Liou 2015
 */
chrome.commands.onCommand.addListener(function(command){
	// TODO: improve chrome.tabs.executescript passing parameters
	if (command == "pron-uk") {
		chrome.tabs.executeScript({
    		code: 'document.getElementsByClassName("sound")[1].click()'	
  		});
	}else if (command == "pron-us") {
		chrome.tabs.executeScript({
    		code: 'document.getElementsByClassName("sound")[0].click()'	
  		});
	}else{
		console.log(command);
	}
});