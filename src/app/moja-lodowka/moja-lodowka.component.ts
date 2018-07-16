import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../shared/recipe.model';
import { AddRecipeService } from '../service/add-recipe.service';
import { AddShoppingListService } from '../service/addShoppingList.service';


@Component({
  selector: 'app-moja-lodowka',
  templateUrl: './moja-lodowka.component.html',
  styleUrls: ['./moja-lodowka.component.css']
})
export class MojaLodowkaComponent implements OnInit {
  recipes: Recipe[] = [];
  selectedRecipeName = '';
  selectedRecipeIngredients: Ingredient[] = [];
  missingRecipeIngredients: Ingredient[] = [];
  missingIngredient: Ingredient = new Ingredient("", 0);
  counter = 0;

  myFridgeIngredients: Ingredient[] = [
    new Ingredient('jajka', 3),
    new Ingredient('masło', 1),
    new Ingredient('woda', 2),
    new Ingredient('pomidory', 3)
  ];

  constructor(private recipeService: AddRecipeService,
    private shoppingListService: AddShoppingListService) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipesArray;
  }

  selectedRecipe(id: number) {
    this.selectedRecipeName = this.recipes[id].name;
    this.selectedRecipeIngredients = this.recipes[id].ingredients;
    this.missingRecipeIngredients = [];
    this.missingIngredients();
  }

  private missingIngredients() {
    for (let ingredientRecipe of this.selectedRecipeIngredients) {
      for (let ingredientFridge of this.myFridgeIngredients) {
        if (ingredientRecipe.name !== ingredientFridge.name) {
          this.counter++;
        } else {
          if (ingredientRecipe.amount > ingredientFridge.amount) {
            this.missingIngredient.amount = ingredientRecipe.amount - ingredientFridge.amount;
            this.missingIngredient.name = ingredientRecipe.name;
            this.missingRecipeIngredients.push(this.missingIngredient);
          }
        }
      }
      if (this.counter === this.myFridgeIngredients.length) {
        this.missingRecipeIngredients.push(ingredientRecipe);
      }
      this.counter = 0;
    }
  }

  addToShoppingList() {
    this.shoppingListService.addMissingIngredients(this.missingRecipeIngredients);
  }
}
