let nodesP = document.querySelectorAll('p.example');
let nodesExampleClass = document.querySelectorAll('.example');
let nodesAwithTarget = document.querySelectorAll('a[target]');
let headingClassTitle = document.querySelectorAll('h1.Title, h2.Title');
let changeButton = document.getElementById('changeBtn');
changeButton.addEventListener("click", function() {
	nodesP[0].style.backgroundColor = 'red';
	for (var node of nodesExampleClass) {
		node.style.margin = "50px";
		node.style.padding = "50px";
		node.style.border = "5px solid pink";
	}
	for (var node of nodesAwithTarget) {
		node.style.textDecoration = "none";
		node.style.border = "5px solid red";
	}
	for (var node of headingClassTitle) {
		node.style.color = "blue";
	}
}, false);