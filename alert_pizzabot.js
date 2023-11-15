const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

let orderName = prompt(`Enter the name of the pizza you want to order today.`);

while (
  orderName !== vegetarian &&
  orderName !== hawaiian &&
  orderName !== pepperoni
) {
  alert(
    `Invalid pizza choice! Please choose from ${vegetarian}, ${hawaiian} and ${pepperoni}`
  );
  orderName = prompt(`Enter the name of the pizza you want to order today.`);
}

let orderQuantity = parseInt(prompt(`How many of ${orderName} do you want?`));

const cookTime = (orderQuantity) => {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
};

const orderTotal = pizzaPrice * orderQuantity;

if (orderQuantity) {
  const time = cookTime(orderQuantity);
  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`
  );
}
