import { PizzaToppings } from "./pizza-toppings.enum";
import { PizzaSizes } from "./pizza-sizes.enum";

export interface IPizza {
  name: string;
  slices: number;
  toppigs: PizzaToppings[];
  price: number;
  cheescrust: boolean;
  sizes: PizzaSizes[];
  vegan?: boolean;
  vegaterian?: boolean;
  prices?: IPizzaPrice[];
}

export interface IPizzaPrice {
  size: string;
  price: number;
}

export class Pizza {
  name: string = "";
  slices: number = 8;
  toppigs: PizzaToppings[] = [];
  price: number = 0;
  cheescrust: boolean = false;
  sizes: PizzaSizes[] = [];
  vegan?: boolean = false;
  vegaterian?: boolean = false;
  prices: IPizzaPrice[] = null;

  constructor(data: IPizza) {
    this.name = data.name;
    this.slices = data.slices;
    this.toppigs = data.toppigs;
    this.price = data.price;
    this.cheescrust = data.cheescrust;
    this.sizes = data.sizes;
    this.prices = this.getPizzaPrices();
    if (data.vegan) {
      this.vegan = data.vegan;
    }
    if (data.vegaterian) {
      this.vegaterian = data.vegaterian;
    }
    return this;
  }

  private getPizzaPrices(): IPizzaPrice[] {
    return this.sizes.map((item, index) => {
      const addition = (this.price / 100) * 15 * index;
      // console.log(this.price + addition);
      return {
        size: PizzaSizes[item],
        price: this.price + addition
      };
    });
  }
}
