let obj = {
  name: "NAME",
  aFunction() {
    //Here this context refers to the object.
    console.log(this.name);
  }
}
function randomFunction() {
  return this;
}

//Here both first and second console will call window context. Window is the global context.
//Second will also log window because this function is called in global context.
console.log(this)
console.log(randomFunction());

function anotherFunction(aF) {
  return aF
}
//Here this refers to the anotherFunction because anotherFunction is calling the randomFunction;
console.log(anotherFunction(randomFunction))
obj.aFunction();

const arr = [3,5,2,4,4,2,7,6];

//.join() converts array intro strings
const newArr = arr.join();
console.log(typeof newArr);

//forEach to access all elements of an array. It takes anonymous function as an argument.
//It provides function for each element.
arr.forEach((numbers, index) => {
  console.log("Index: " + index + " - " + numbers);
})

//Event listener takes two arguments, first one listener type and other anonymous function.
//Anything inside the anonymous function will be triggered if listener is activated.
//Here the anonymous function is a callback function - a callback function is  function which is passed as argument
//in another function and is called there.
const box = document.querySelector(".event-box");
box.addEventListener('animationstart', () => {
  console.log("Animation Started")
})
box.addEventListener('animationend', () => {
  console.log("Animation Ended")
})

//If an event cannot be dealt by the element it sendss it to the immediate parent element and this continues untill
//it reaches to the root element and then it vanishies.
//This event delegation is known as bubbling.
//So we can use event listener on parent element and if a user clicks on its chils component it will be bubbled down to 
//parent and handled there.
const eventDel = document.querySelector(".event-delegation");
eventDel.addEventListener('click', (event) => {
  event.target.innerText = "Changed";
  //stopPropagation will stop the bubbling of event any further.
  event.stopPropagation();
})