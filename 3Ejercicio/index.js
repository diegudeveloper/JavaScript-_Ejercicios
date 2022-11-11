const input = document.querySelector('input[type="text"]');
const btnadd = document.querySelector(".btn-add");
const ul = document.querySelector("ul");


btnadd.addEventListener('click', (e) => {
	e.preventDefault();

	let newValue = input.value;

	ul.innerHTML += `<li class="li">
						<p>${newValue}</p>
						<button class="deletebtn">Delete</button>
					</li> 
					`
	
	

});