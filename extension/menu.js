var chrome = window.chrome;

chrome.runtime.onInstalled.addListener(function () {
	chrome.contextMenus.create({
		title: 'Lookup "%s" on npmjs.org',
		id: 'parent',
		contexts: ['selection'],
		onclick: opennpm
	});
	function opennpm(info) {
		chrome.tabs.create({ url: 'https://www.npmjs.com/package/' + info.selectionText });
	}
	// TODO: add in npms.io option
	// function opennpms(info) {
	// 	window.open('https://npms.io/search?term=' + info.selectionText, '_blank');
	// }
});
