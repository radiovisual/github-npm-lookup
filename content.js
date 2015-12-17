'use strict';

function convert() {
	const jsMarkup = document.querySelector('.type-javascript');

	if (jsMarkup) {
		const tds = Array.from(document.querySelectorAll('.js-file-line'));

		for (const td of tds) {
			const html = td.innerHTML;
			const span1 = td.querySelector('.pl-k');

			if (span1 && span1.innerText === 'import') {
				// captures: import {EventEmitter} from 'events';
				// captures: import arrayUniq from 'array-uniq';
				const name = td.innerText.split(' ')[3].split(/'|"/g)[1];
				const link = getLinkOrName(name);
				td.innerHTML = html.replace(name, link);
			} else if (html.search('<span class="pl-c1">require</span>') !== -1) {
				// captures: require('object-assign');
				const reName = /require\(['|"](.*)+['|"]\);?/i;
				const name = td.innerText.match(reName)[1];
				const link = getLinkOrName(name);

				if (name) {
					try {
						const nameReg = new RegExp(name, 'g');
						td.innerHTML = html.replace(nameReg, link);
					} catch (e) {
						console.log('skipping name: ', name);
					}
				}
			}
		}
	}
}

// Don't let local packages (ex: ./index) be searched on npm
function getLinkOrName(name) {
	if (name[0] === '.') {
		return name;
	}
	return '<a class="npmlink" href="https://www.npmjs.com/package/X">X</a>'.replace(/X/g, name);
}

document.addEventListener('DOMContentLoaded', () => {
	convert();
});
