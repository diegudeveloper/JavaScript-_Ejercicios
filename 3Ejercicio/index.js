const input = document.querySelector('input[type="text"]');
const btnadd = document.querySelector(".btn-add");
const div = document.querySelector(".list");
let Idcounter = 0;

btnadd.addEventListener('click', (e) => {
	e.preventDefault();
	Idcounter++;

	let newValue = input.value;

	if(input.value != '')
		div.innerHTML += `<ul class="lista" id="${Idcounter}">
							<li class="li">
								<p>${newValue}</p>
								<button class="deletebtn">Delete</button> 
							</li> 
						</ul>
						` 
	
	input.value = '';
	tareasPendientes();

});

div.addEventListener('click', (event) => {
	if(event.srcElement.nodeName == 'BUTTON') {
		deleteTask(event.srcElement.parentNode.parentElement.id);

	};
})

let tareasPendientes = () => {
	let pendientes = div.querySelectorAll('ul');
	listTareas.innerHTML = `<p>Pending tasks ${pendientes.length}</p>`;
}

let deleteTask = (id) => {
	let taskToDelete = document.getElementById(id);
	div.removeChild(taskToDelete);
	tareasPendientes();

}