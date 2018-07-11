import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

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

  addRecipe(newRecipe: Recipe) {
    this.recipesArray.push(newRecipe);
  } 
}
