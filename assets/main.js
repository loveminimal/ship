let scClear = document.querySelector('#sc-clear');
let scInput = document.querySelector('#sc-input');
let scVal = '';
let eby = document.querySelector('#by');
let ebd = document.querySelector('#bd');
let cur;

init();

function init() {
	scInput.focus();
	scClear.style = 'opacity: 0;'
	cur = document.querySelector('#by');
	
	let curId = localStorage.getItem('curId')
	if (curId) cur = document.querySelector(curId);
	
	cur.className = 'activated';
}

function search (e) {
	if (e && e.keyCode !== 13) return;

	let _eg = cur.id === 'by' ? 'https://cn.bing.com/search?q=' : 'https://baidu.com/s?wd='
	window.open(_eg + scVal)
}

function select(e) {
	let _id = '#' + e.target.id;
	cur = document.querySelector(_id);
	localStorage.setItem('curId', _id)

	eby.className = '';
	ebd.className = '';

	cur.className = 'activated';
	if (scVal) search();
}

function clearVal() {
    if (!scInput.value) return;
    scInput.value = '';    
    reactive();
}

function reactive() {
    scVal = scInput.value.trim();
    scClear.style = scVal ? 'opacity: 1' : 'opacity: 0';
}
