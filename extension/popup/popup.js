var chrome = window.chrome;

document.addEventListener('DOMContentLoaded', function () {
	var npmjsBtn = document.getElementById('launch-npmjs');
	var npmsBtn = document.getElementById('launch-npms');

	npmjsBtn.addEventListener('click', function () {
		chrome.windows.create({url: 'https://www.npmjs.com/package/' + getPackageName(), type: 'normal'}, function () {});
	}, false);

	npmsBtn.addEventListener('click', function () {
		chrome.windows.create({url: 'https://npms.io/search?term=' + getPackageName(), type: 'normal'}, function () {});
	}, false);

	function getPackageName() {
		var pkg = document.getElementById('package-name').value;
		if (pkg) {
			return pkg.trim().toLowerCase();
		}
		return '';
	}
}, false);
