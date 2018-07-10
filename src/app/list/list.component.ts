import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes: Recipe[] = [ 
    new Recipe('kanapka',[{name: "chleb", amount: 2},{name: "masło", amount: 1}],'./assets/images/kanapka.jpg','Pokrój chleb. Posmaruj masłem.'),
    new Recipe('jajecznica',[{name: "jajka", amount: 4},{name: "chleb", amount: 2}],'../assets/images/jajecznica.jpg','Rozgrzej patelnię. Wbij jajka.'),    
    new Recipe('ryż',[{name: "ryż", amount: 1}],'../assets/images/ryż.jpg','Ugotuj ryż.'),  
  ];
  @Input() featureTitle: string;

  constructor() { }

  ngOnInit() {
  }

  // addNewRecipe(recipe: {name: string, description: string, ingredients: Ingredient[], imgPath: string}) {
  //   this.recipes.push(new Recipe(recipe.name, recipe.ingredients, recipe.imgPath, recipe.description));
  // }
}
