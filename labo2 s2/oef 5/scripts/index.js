const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	let pElement=document.getElementById("txtOutput");
	let btn = document.getElementById("btn");
	btn.addEventListener("click", () => {
		pElement.innerHTML="Welkom!";
	} );
	
}

window.addEventListener("load", setup);