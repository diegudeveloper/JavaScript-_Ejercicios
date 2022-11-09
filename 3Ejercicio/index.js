const input = document.querySelector("input");
const btnadd = document.querySelector(".btn-add");
const ul = document.querySelector("ul");


btnadd.addEventListener('click', (e) => {
	e.preventDefault();
	
	const text = input.value;
	
	const li = document.createElement("li");
	li.className = "li";
	const p = document.createElement("p");
	p.textContent = text;
	const btn = document.createElement("button");
	btn.className = "deletebtn";

	ul.appendChild(li);
	li.appendChild(p);
	ul.appendChild(button);

});