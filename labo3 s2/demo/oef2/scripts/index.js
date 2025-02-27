const setup = () => {
	let listItems = document.getElementsByTagName('p');
    for(let i=1; i<listItems.length; i=i+ 2) {
        listItems[i].className += " rood"
    }
}

window.addEventListener("load", setup);