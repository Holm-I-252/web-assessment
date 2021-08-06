console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submited Sucessfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById('swolDuck').addEventListener('mouseenter', () => {
	document.getElementById('duckMessage').classList.add('visible')
	document.getElementById('duckMessage').classList.remove('hidden')
})
document.getElementById('swolDuck').addEventListener('mouseleave', () => {
	document.getElementById('duckMessage').classList.add('hidden')
	document.getElementById('duckMessage').classList.remove('visible')
})