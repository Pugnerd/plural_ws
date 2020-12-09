function _load(){ // betölti a load függvény tartalmát

	let rootE = document.getElementById("root"); // létrehoztunk egy változót a "root" elemnek

	let aTextArray = ["alma", "cseresznye", "eper", "dinnye", "mandarin", "szeder", "paradicsom", "citrom", "datolya", "szilva", "barack", "kiwi", "pomelo", "kaki", "meggy"]; // létrehoztunk egy tömböt

	//console.log(aTextArray.length);

	for (let index = 0; index < aTextArray.length; index++) { //  egy for ciklus, ami a tömb egész hosszán fut
		
		// console.log(aTextArray[index]);

		rootE.insertAdjacentHTML("beforeend", ` 
			<div class="fruit">${aTextArray[index]}</div>
		`); //  a tömb tartalmára rakja rá a div elemet, és belerakja a HTML-be a tömböt.


	}
	//console.log(document.getElementsByClassName("fruit"));
		let fruitDivs = rootE.querySelectorAll(".fruit"); // egy fruitDivs nevű változót definiáltunk, amelyhez hozzárendeljük a fruit class taget.
		//console.log(fruitDivs.length);

		for (let index = 0; index < fruitDivs.length; index++) {
			//console.log(fruitDivs[index]);
	//fruitDivs[index].classList.add("anotherClass");
			// console.log(index === 1);
			//console.log(index % 2 === 0);
			if(index % 2 === 0){
				fruitDivs[index].classList.add("trueClass"); // azokra az elemekre rakja rá a "trueClass"-t amelyekre igaz a feltétel.
			}	else if(index % 5 === 0){
				fruitDivs[index].classList.add("anotherClass"); // ebben a esetben ez teljesül
			} else {
				fruitDivs[index].classList.add("falseClass"); // ha az előzőek közül egyik sem, akkor ez érvényesül
			} 
} //létrehoztunk egy for ciklust, amin belül feltételeket adtunk meg, hogy mi hogyan fusson le.
}
window.addEventListener("load", _load) // eseményfigyelőt adtunk meg a load függvényre.