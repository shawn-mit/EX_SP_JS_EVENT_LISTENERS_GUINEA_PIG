//document.getElementById("").addEventListener("click", )

var pageheader  = document.getElementById("page-header");
var pagetitle = document.getElementById("page-title"); 
var section = document.getElementsByClassName("article-section");
var input = document.getElementById("keypress-input");
var output = document.getElementById("output-target");
var guineaPig = document.getElementById ("guinea-pig");
var addcolor = document.getElementById("add-color");
var hulkify = document.getElementById("make-large");
var captureIt = document.getElementById ("add-border");
var rounded = document.getElementById ("add-rounding");




//document.getElementById("add-color").addEventListener("click", color);
document.getElementById("add-color").addEventListener ("click", color);


function color() {

	guineaPig.classList = "bluecolor";

}


document.getElementById("make-large").addEventListener("click", makeLarger);
//hulkify.addEventListener("click", makeLarger) 



function makeLarger () {

	guineaPig.classList = "makelarger";
}



document.getElementById("add-border").addEventListener("click", border);
//captureIt.addEventListener("click", makelarger)

function border () {

	guineaPig.classList = "border";
}


document.getElementById("add-rounding").addEventListener("click", borderround )
//rounded.addEventListener("click", )


function borderround () {

		guineaPig.classList = "rounded";

}


/*document.getElementById("guinea-pig").addEventListener(inlineBlocks)

function inlineBlocks() {

	document.getElementById ("").style.display = "inline-block";

}
*/




document.getElementById("page-title").addEventListener("mouseover", hoverMouse);
function hoverMouse () {

	document.getElementById("output-target").innerHTML = "You moved your mouse over the header";

}



document.getElementById("page-title").addEventListener("mouseout", outMouse);
function  outMouse () {

	document.getElementById("output-target").innerHTML = "You left me!!";
}



document.getElementById("keypress-input").addEventListener("keypress", keypin)

function keypin () {

 document.getElementById("output-target").innerHTML = document.getElementById("keypress-input").value  

}


var  sections = document.getElementsByClassName("article-section")

	//console.log(sections);

for (i = 0; i < sections.length ; i ++ ) {

	sections[i].addEventListener ("click", sectional )
}

function sectional () {


	document.getElementById("output-target").innerHTML = "You clicked on the " + event.target.innerHTML + " section"
}



/*



function demoDisplay() {
    document.getElementById("myP1").style.display = "none";
}

*/



/*


EventTarget.addEventListener()
Register an event handler of a specific event type on the EventTarget.
EventTarget.removeEventListener()
Removes an event listener from the EventTarget.
EventTarget.dispatchEvent()
Dispatch an event to this EventTarget.

*/