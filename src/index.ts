import { PizzaToppings, PizzaToppingNames } from "./pizza-toppings.enum";
import {
  PizzaSizes,
  PizzaSizeNames,
  PizzaSizePrices
} from "./pizza-sizes.enum";

import { Pizza } from "./pizza.class";
import { PizzaCatalog } from "./pizza-catalog.class";

const pizza: Pizza = {
  name: "Pizza BBQ",
  slices: 6,
  toppigs: [PizzaToppings.TOMATO, PizzaToppings.BBQ],
  price: 15,
  cheescrust: true,
  vegan: true,
  sizes: [PizzaSizes.S, PizzaSizes.M, PizzaSizes.L, PizzaSizes.XL]
};

const bbqPizza = new Pizza(pizza);

console.log(bbqPizza);

const hawaiPizza = new Pizza({
  name: "Hawai",
  slices: 6,
  toppigs: [PizzaToppings.TOMATO],
  price: 12,
  cheescrust: true,
  sizes: [
    PizzaSizes.S,
    PizzaSizes.M,
    PizzaSizes.L,
    PizzaSizes.XL,
    PizzaSizes.XXL
  ]
});

const vegiPizza = new Pizza({
  name: "Veggi",
  slices: 6,
  toppigs: [PizzaToppings.TOMATO],
  price: 11,
  cheescrust: false,
  vegan: true,
  vegaterian: true,
  sizes: [
    PizzaSizes.S,
    PizzaSizes.M,
    PizzaSizes.L,
    PizzaSizes.XL,
    PizzaSizes.XXL
  ]
});

const pizzaCatalog = new PizzaCatalog([bbqPizza, hawaiPizza, vegiPizza]);

console.log(PizzaToppingNames);
console.log(PizzaSizeNames);
console.log(PizzaSizePrices);

document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
