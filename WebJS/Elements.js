/*const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);*/


let element = document.querySelector('#clicker')
element.addEventListener('click', ()=> document.getElementById('demo').innerHTML = Date())
document.querySelector('#container').addEventListener('click', (event)=> {
	event.stopPropagation();
	document.getElementById('demo').innerHTML = 'FALSE'
}, true)
