export enum PizzaToppings {
  TOMATO, // value = 0
  BBQ, // value = 1
  NONE, // value = 2
  CREAM // value = 3
}

export const PizzaToppingNames: string[] = Object.keys(PizzaToppings)
  .map(x => {
    if (new RegExp(/[0-9]/g).test(x)) {
      return PizzaToppings[x].toLowerCase();
    }
  })
  .filter(x => x !== undefined);
