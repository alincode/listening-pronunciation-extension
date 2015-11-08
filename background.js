/*
 * Copyright AiLin Liou 2015
 */
chrome.commands.onCommand.addListener(function(command){
	// TODO: improve chrome.tabs.executescript passing parameters
	console.log(command);
       if(command == "pron-us") {
		chrome.tabs.executeScript({
    		code: 'document.getElementsByClassName("sound")[1].click()'	
  		});
	}
});
