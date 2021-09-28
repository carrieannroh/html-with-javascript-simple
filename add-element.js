// create a new div element
//const newDiv = document.createElement("div");
const h2 = document.createElement("h2");
// and give it some content
//const newContent = document.createTextNode("Hi there and greetings!");
const newHead = document.createTextNode("Greetings!");

// add the text node to the newly created div
//newDiv.appendChild(newContent);
newDiv.appendChild(newHead);
// add the newly created element and its content into the DOM
//const existingDiv = document.getElementById("my-target-element");
//document.body.appendChild(newDiv, existingDiv);

const existingDiv = document.getElementById("my-target-element");
document.body.appendChild(newDiv, existingDiv, h2);