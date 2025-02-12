const setup = () => {
	let btn = document.getElementById("btn");
	btn.addEventListener("click", kopieer);
	
}
const kopieer = () =>{
	let txt = document.getElementById("skibidi");
	let value = txt.value;
	console.log(value);
}

window.addEventListener("load", setup);