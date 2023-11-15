const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

document.getElementById("pizzaForm").addEventListener("submit", (e) => {
  let responseElement = document.getElementById("pizzaResponse");

  // get the pizza type from the form
  let pizzaTypeElement = document.getElementById("pizzaType"); // THE BOX ON THE PAGE
  let pizzaType = pizzaTypeElement.value; // THE INPUT THE USER WRITES INTO THE BOX

  // get the quantity from the form
  let pizzaQuantitytElement = document.getElementById("pizzaQuantity");
  let pizzaQuantity = parseInt(pizzaQuantitytElement.value);

  const cookTime = (quantity) => {
    if (quantity <= 2) {
      return 10;
    } else if (quantity >= 3 && quantity <= 5) {
      return 15;
    } else {
      return 20;
    }
  };

  const orderTotal = pizzaPrice * pizzaQuantity;
  const time = cookTime(pizzaQuantity);

  responseElement.textContent =
    "Great, I'll get started on your " +
    pizzaType +
    " order (quantity: " +
    pizzaQuantity +
    ") right away, it will cost " +
    orderTotal +
    " kr. The pizzas will take " +
    time +
    " minutes.";

  e.preventDefault();
});
