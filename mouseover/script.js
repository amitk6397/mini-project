const xPosition = document.querySelector('#xpos-value');
const yPosition = document.querySelector('#ypos-value');

 document.addEventListener('mouseover',(e)=>{
 	let x = e.clientX;
 	let y = e.clientY;

 	xPosition.textContent = x;

 	yPosition.textContent = y;

 	console.clear();
 	console.log(x);
 	console.log(y);
 });

