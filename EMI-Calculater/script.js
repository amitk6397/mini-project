const loanAmount = document.querySelector('#load-amount-input');
const interestAmount = document.querySelector('#interest-rate-input');
const monthPay = document.querySelector('#months-to-pay-input');
const butt = document.querySelector('#calculate');
const totalEmi = document.querySelector('#emi');


butt.addEventListener('click', ()=>{
	let x = Math.floor(loanAmount.value*interestAmount.value*monthPay.value)/100;
	if(loanAmount.value=== "" || interestAmount.value==="" || monthPay.value===""){
		alert("Please enter all the value")
	}else{
		let x = Math.floor(loanAmount.value*interestAmount.value*monthPay.value)/100;
		let y = (x - loanAmount.value)/monthPay.value;
		let z = y.toFixed(2); 
		totalEmi.textContent = z;
		console.log(z);
	}

	
})