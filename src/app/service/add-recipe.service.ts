import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class AddRecipeService {
  recipesArray: Recipe[] = [
    new Recipe('kanapka', [{ name: "chleb", amount: 2, unit: "szt" }, { name: "masło", amount: 1, unit: "szt" }], './assets/images/kanapka.jpg', 'Pokrój chleb. Posmaruj masłem.'),
    new Recipe('jajecznica', [{ name: "jajka", amount: 4, unit: "szt" }, { name: "chleb", amount: 2, unit: "szt" }], '../assets/images/jajecznica.jpg', 'Rozgrzej patelnię. Wbij jajka.'),
    new Recipe('ryż', [{ name: "ryż", amount: 1, unit: "kg" }], '../assets/images/ryż.jpg', 'Ugotuj ryż.'),
    new Recipe('chleb z masłem i sałatą', [{ name: "chleb", amount: 1, unit: "szt" },{ name: "masło", amount: 1, unit: "szt" },{ name: "sałata", amount: 1, unit: "szt" }],'../assets/images/ryż.jpg', 'Ugotuj ryż.'),
    new Recipe('chleb', [{ name: "mąka", amount: 1, unit: "kg" }], '../assets/images/ryż.jpg', 'Ugotuj ryż.'),
  ];
  constructor() { }

  @Output() newRecipe = new EventEmitter<Recipe>();

  addNewRecipe(newRecipeObj: Recipe) {
    this.recipesArray.push(newRecipeObj);
    this.newRecipe.emit(newRecipeObj);
  }

  deleteRecipe(recipeId: number) {
    this.recipesArray.splice(recipeId, 1);
  }
}
