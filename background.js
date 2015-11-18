/*
 * Copyright AiLin Liou 2015
 */
chrome.commands.onCommand.addListener(function(command){
	console.log(command);
	if(command == "pronunciation") {
		chrome.tabs.executeScript(null, {file: "content_script.js"});
	}
});
