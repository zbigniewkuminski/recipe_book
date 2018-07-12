import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class AddRecipeService {
  recipesArray: Recipe[] = [ 
    new Recipe('kanapka',[{name: "chleb", amount: 2},{name: "masło", amount: 1}],'./assets/images/kanapka.jpg','Pokrój chleb. Posmaruj masłem.'),
    new Recipe('jajecznica',[{name: "jajka", amount: 4},{name: "chleb", amount: 2}],'../assets/images/jajecznica.jpg','Rozgrzej patelnię. Wbij jajka.'),    
    new Recipe('ryż',[{name: "ryż", amount: 1}],'../assets/images/ryż.jpg','Ugotuj ryż.'),  
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
