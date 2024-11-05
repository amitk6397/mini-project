const num = document.querySelector('#count');
const subNum = document.querySelector('#sub');
const resetNum = document.querySelector('#reset');
const addNum = document.querySelector('#add');


let sum = 0;


addNum.addEventListener('click',()=>{
	sum ++;
	num.textContent = sum;
} )

subNum.addEventListener('click',()=>{
	sum --;
	num.textContent = sum;
} )

resetNum.addEventListener('click',()=>{
	sum = 0;
	num.textContent = sum;
} )