const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
	e.preventDefault();
	const username = loginForm.username.value;
	const password = loginForm.password.value;

	// post API 
	const baseUrl = "https://go-hackaton-heroku.herokuapp.com/v1/hackaton/login"

	const formData = new FormData();
	formData.append('username', username);
	formData.append('password', password);

	fetch(baseUrl, {
		method: 'POST',
  		body: formData
	})
	.then(response => response.json())
	.then(result => {
		console.log('Success:', result);
		if(result.data.role === "salesman"){
			window.location.href = "dashboard-supervisor.html"
		}
	})
	.catch(error => {
		console.error('Error:', error);
	});

	// result object

	// if(username == "user" && password == "user123") {
	// 	window.location.href = "dashboard-supervisor.html"
	// } else {
	// 	alert(" wrong username password ")
	// }
})
