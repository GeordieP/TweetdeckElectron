(function() {
	var shell = require('shell');
	var ipc = require('electron').ipcRenderer;
	var remote = require('remote');
	var BrowserWindow =  remote.require('browser-window');
	window.electronWindowSetup = function() {
		var webView = document.getElementById("tweetdeck-webview");

		webView.addEventListener('new-window', function(event) {
			shell.openExternal(event.url);
		});

		document.getElementById('openConsoleBtn').addEventListener('click', function(event) {
			BrowserWindow.getFocusedWindow().webContents.openDevTools();
		});

		document.getElementById('min-btn').addEventListener('click', function(event) {
			BrowserWindow.getFocusedWindow().minimize();
		});

		document.getElementById('max-btn').addEventListener('click', function(event) {
			BrowserWindow.getFocusedWindow().maximize();
		});

		// use an IPC for this one so we can get the window state and save it to a file before it closes
		document.getElementById('close-btn').addEventListener('click', function(event) {
			ipc.send('appClose');
		});
	}
})();