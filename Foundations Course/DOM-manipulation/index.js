//Select the id container in HTML page to modify it 
const container = document.querySelector("#container");
//Create a <p> element with text and change color to red 
const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red";
paragraph.style.color = "red";
//Add everithing to the page
container.appendChild(paragraph);


const headerThree = document.createElement("h3");
headerThree.textContent = "Hey I'm blue h3";
headerThree.style.color = "blue";

container.appendChild(headerThree);

//create Div with black border 
const divBlack = document.createElement("div");
divBlack.classList.add("divBlack");
divBlack.setAttribute("style", "background: pink; border-style: solid; border-style: black");
container.appendChild(divBlack)


const divB = document.querySelector(".divBlack");

//create h3 inside divBlack
const headerDivBlack = document.createElement("h1");
headerDivBlack.textContent = "I'm in a div" ;
divB.appendChild(headerDivBlack)

//create p inside divBlack
const pDivBlack = document.createElement("p");
pDivBlack.textContent = "ME TOO!";
divB.appendChild(pDivBlack)



