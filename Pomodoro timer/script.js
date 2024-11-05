const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const timer = document.getElementById('timer');

let minutes = 25;
let secounds = 0;
let timerId;

start.addEventListener("click", ()=>{
timerId = setInterval(()=>{
	if(secounds === 0){
		secounds=59;
		if(minutes !==0){
			minutes--;
		}
	}else{
		secounds--;
	}
	console.log(minutes);
	console.log(secounds);
	timer.innerHTML = `${minutes}:${secounds}`;
}, 1000);
});

stop.addEventListener("click",()=>{
	clearInterval(timerId);
});

reset.addEventListener("click",()=>{
 minutes = 25;
 secounds = 0;
timer.innerHTML = `${minutes}:0${secounds}`;

});