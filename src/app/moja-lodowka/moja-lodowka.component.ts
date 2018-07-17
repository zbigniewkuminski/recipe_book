import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../shared/recipe.model';
import { AddRecipeService } from '../service/add-recipe.service';
import { AddShoppingListService } from '../service/addShoppingList.service';
import { MyFridgeServiceService } from '../service/my-fridge-service.service';

@Component({
  selector: 'app-moja-lodowka',
  templateUrl: './moja-lodowka.component.html',
  styleUrls: ['./moja-lodowka.component.css']
})
export class MojaLodowkaComponent implements OnInit {
  recipes: Recipe[] = [];
  whatCanIPrepareList: Recipe[] = [];
  allRecipes = true;
  selectedRecipeName = '';
  selectedRecipeIngredients: Ingredient[] = [];
  missingRecipeIngredients: Ingredient[] = [];
  missingIngredient: Ingredient = new Ingredient("", 0, "");
  counter = 0;
  myFridgeIngredients: Ingredient[] = [];

  constructor(private recipeService: AddRecipeService,
    private shoppingListService: AddShoppingListService,
    private myFridgeService: MyFridgeServiceService) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipesArray;
    this.myFridgeIngredients = this.myFridgeService.myFridgeIngredients;
    this.whatCanIPrepare();
  }

  selectedRecipe(id: number) {
    if (this.allRecipes) {
      this.selectedRecipeName = this.recipes[id].name;
      this.selectedRecipeIngredients = this.recipes[id].ingredients;
    } else {
      this.selectedRecipeName = this.whatCanIPrepareList[id].name;
      this.selectedRecipeIngredients = this.whatCanIPrepareList[id].ingredients;
    }
    this.missingRecipeIngredients = [];
    this.missingIngredients();
  }

  private missingIngredients() {
    for (let ingredientRecipe of this.selectedRecipeIngredients) {
      this.counter = 0;
      for (let ingredientFridge of this.myFridgeIngredients) {
        if (ingredientRecipe.name !== ingredientFridge.name) {
          this.counter++;
        } else {
          if (ingredientRecipe.amount > ingredientFridge.amount) {
            this.missingIngredient.amount = ingredientRecipe.amount - ingredientFridge.amount;
            this.missingIngredient.name = ingredientRecipe.name;
            this.missingIngredient.unit = ingredientRecipe.unit;
            this.missingRecipeIngredients.push(this.missingIngredient);
          }
        }
      }
      if (this.counter === this.myFridgeIngredients.length) {
        this.missingRecipeIngredients.push(ingredientRecipe);
      }
    }
  }

  addToShoppingList() {
    this.shoppingListService.addMissingIngredients(this.missingRecipeIngredients);
  }

  whatCanIPrepare() {
    this.whatCanIPrepareList = [];
    for (let recipe of this.recipes) {
      this.counter = 0;
      for (let ingredientRecipe of recipe.ingredients) {
        for (let ingredientFridge of this.myFridgeIngredients) {
          if (ingredientRecipe.name === ingredientFridge.name && ingredientRecipe.amount <= ingredientFridge.amount) {
            this.counter++;
          }
        }
      }
      if (recipe.ingredients.length === this.counter) {
        this.whatCanIPrepareList.push(recipe);
      }
    }
  }
  swapRecipeList() {
    this.allRecipes = !this.allRecipes;
    this.whatCanIPrepareList = [];
    this.whatCanIPrepare();
  }

  deleteIngredientFromFridge(i: number) {
    this.myFridgeIngredients.splice(i, 1);
    this.selectedRecipeName = '';
  }

  prepareMeal(recipeIng: Ingredient[]) {
      recipeIng.forEach((recipeIngredient) => {
        this.myFridgeIngredients.forEach((myFridgeIngredient, index) => {
          if (recipeIngredient.name === myFridgeIngredient.name) {
            if (recipeIngredient.amount === myFridgeIngredient.amount) {
              this.myFridgeIngredients.splice(index, 1);
              index--;
            } else {
              myFridgeIngredient.amount -= recipeIngredient.amount;
            }
          }
        }
      })
      
    alert('Przygotowałeś posiłek');
    this.selectedRecipeName = '';
  }
}