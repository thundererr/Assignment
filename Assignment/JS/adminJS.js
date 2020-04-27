var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

const pass = document.body.querySelector(".password-box");
const len = document.body.querySelector(".items .item-1");
const up = document.body.querySelector(".items .item-2");
const lo = document.body.querySelector(".items .item-3");
const sp = document.body.querySelector(".items .item-4");
const digit = document.body.querySelector(".items .item-5");

pass.addEventListener("keyup",validate);

function validate(event){
	const lenpattern = "(?=.{8,})";
	if(pass.value.length >= 8) {
		len.classList.add("valid");
	}
	else{
		len.classList.remove("valid");
	}
	const upPattern = "(?=.*[A-Z])";
	if(pass.value.match(upPattern)){
		up.classList.add("valid");
	}
	else{
		up.classList.remove("valid");
	}

	const loPattern = "(?=.*[a-z])";
	if(pass.value.match(loPattern)){
		lo.classList.add("valid");
	}
	else{
		lo.classList.remove("valid");
	}

	const spPattern = "(?=.*[!@#\$%\^&\*])";
	if(pass.value.match(spPattern)){
		sp.classList.add("valid");
	}
	else{
		sp.classList.remove("valid");
	}
	const digitPattern = "(?=.*[0-9])";
	if(pass.value.match(digitPattern)){
		digit.classList.add("valid");
	}
	else{
		digit.classList.remove("valid");
	}
}