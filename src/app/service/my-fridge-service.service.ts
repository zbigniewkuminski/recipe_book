import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class MyFridgeServiceService {
  myFridgeIngredients: Ingredient[] = [
    new Ingredient('jajka', 3, 'szt'),
    new Ingredient('mleko', 3, 'l'),
    new Ingredient('sałata', 1, 'szt'),
    new Ingredient('masło', 1, 'szt'),
    new Ingredient('chleb', 2, 'szt'),
  ];
  concatIng: Ingredient[] = [];
  duplicateCounter = 0;
  constructor() { }

  buyIngredients(newIngredients: Ingredient[]) {
    for (let ingredientBought of newIngredients) {
      this.duplicateCounter = 0;
      for (let ingredientFromFridge of this.myFridgeIngredients) {
        if (ingredientBought.name === ingredientFromFridge.name) {
          ingredientFromFridge.amount += ingredientBought.amount;
          continue;
        } else {
          this.duplicateCounter++;
        }
      }
      if (this.duplicateCounter === this.myFridgeIngredients.length) {
        this.myFridgeIngredients.push(ingredientBought);
      }
    }
    this.myFridgeIngredients = this.myFridgeIngredients.concat(this.concatIng);
  }
}
