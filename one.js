let inpu = document.querySelector("input");
let list = document.querySelector("ul");
let btns = document.querySelector("button");

// Add new <li> elements with the delete button
btns.addEventListener("click", function () {
  let cre = document.createElement("li");
  cre.classList.add("d-flex", "align-items-center", "mb-2");
  cre.innerText = inpu.value;

  let crebtn = document.createElement("button");
  crebtn.innerText = "Del"; // Add text to the button
  crebtn.classList.add("btn", "btn-primary", "btn-sm", "ms-2");

  cre.appendChild(crebtn);
  list.appendChild(cre);
  inpu.value = ""; // Clear the input after adding
});

// Event delegation: Listen for clicks on the <ul> element and check if a button was clicked

list.addEventListener("click", function(event)
{
if(event.target.tagName=="BUTTON"){
  event.target.parentElement.remove();

};


});