let scClear = document.querySelector('#sc-clear');
let scInput = document.querySelector('#sc-input');
let scVal = '';
let eby = document.querySelector('#by');
let ebd = document.querySelector('#bd');
let cur;

scInput.focus();
scClear.style = 'opacity: 0;'

function search (e) {
	if (e && e.keyCode !== 13) return;

	let _eg = cur.id === 'by' ? 'https://cn.bing.com/search?q=' : 'https://baidu.com/s?wd='
	window.open(_eg + scVal)
}

function select(e) {
	let _id = e.target.id;
	cur = document.querySelector('#' + _id);

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
