let tbody = document.getElementById(`addRow`);
let tr = document.createElement(`row`);
let btn = document.getElementById(`btn`);
let td = document.createElement(`td`);
let i = 1;

btn.style.margin = `10px`;
btn.style.padding = `10px`;
btn.style.background = `lightGreen`;
btn.style.borderRadius = `10px`;
btn.style.border = `1px`;
btn.style.width = `100px`;

btn.onclick = function() {
    let x = document.getElementById('table').insertRow(i);
	let y = x.insertCell(0);
	let z = x.insertCell(1);
	let t = x.insertCell(2);
	y.innerHTML=`Cell 1 row ${i+1}`;
	z.innerHTML=`Cell 2 row ${i+1}`;
	t.innerHTML=`Cell 3 row ${i+1}`;
    i++;
}