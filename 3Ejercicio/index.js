// const input = document.querySelector('input[type="text"]');
// const btnadd = document.querySelector(".btn-add");
// const div = document.querySelector(".list");
// let Idcounter = 0;

// btnadd.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	Idcounter++;

// 	let newValue = input.value;

// 	if(input.value != '')
// 		div.innerHTML += `<ul class="lista" id="${Idcounter}">
// 							<li class="li">
// 								<p>${newValue}</p>
// 								<button class="deletebtn">Delete</button> 
// 							</li> 
// 						</ul>
// 						`
// 	input.value = '';
// 	tareasPendientes();

// });

// div.addEventListener('click', (event) => {
// 	if(event.srcElement.nodeName == 'BUTTON') {
// 		deleteTask(event.srcElement.parentNode.parentElement.id);

// 	};
// })



// let tareasPendientes = () => {
// 	let pendientes = div.querySelectorAll('ul');
// 	listTareas.innerHTML = `<p>Pending tasks ${pendientes.length}</p>`;
// }

// let deleteTask = (id) => {
// 	let taskToDelete = document.getElementById(id);
// 	div.removeChild(taskToDelete);
// 	tareasPendientes();

// }

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArray = numeros.filter(item => item < 5)

// console.log(newArray, numeros);

const numeros = [1, 2, 3, 4, 5];

const totalSuma = numeros.reduce((acc, items) => acc + items, 0);
console.log(totalSuma);

// const multiplicados = numeros.map(items => items * 2);

// console.log(multiplicados);


// const mascotas = [
//     { nombre: 'Puchini' , edad: 12, raza: 'perro' },
//     { nombre: 'Chanchito feliz' , edad: 3, raza: 'perro' },
//     { nombre: 'Pulga' , edad: 10, raza: 'perro' },
//     { nombre: 'Pelusa' , edad: 16, raza: 'gato' },
// ]

// const newArray2 = mascotas.map(items => items.edad);

// console.log(newArray2);

// let newRaza = mascotas.filter(item => item.raza == 'perro');

// console.log(newRaza);