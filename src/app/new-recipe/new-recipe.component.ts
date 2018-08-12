import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../shared/recipe.model';
import { AddRecipeService } from '../service/add-recipe.service';
import { NgForm } from '@angular/forms';
import { ServerServiceService } from '../service/server-service.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  @Input() featureTitle: string;

  ingredients: Ingredient[] = [];
  newRecipe: Recipe;
  ingredientUnit = ['szt', 'kg', 'l'];

  constructor(private recipeService: AddRecipeService,
              private addRecipe: ServerServiceService) { }
  ngOnInit() {
  }

  addIngredient(form: NgForm) {
    console.log(form);
    this.ingredients.push({ "name": form.value.newIngredientName, "amount": form.value.newIngredientAmount, "unit": form.value.unit })
    form.reset();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  clearNewRecipe(recipeForm: NgForm) {
    recipeForm.reset();
    this.ingredients = [];
  }
  createNewRecipe(recipeForm: NgForm) {
    console.log(recipeForm);
    this.newRecipe = {name: recipeForm.value.newRecipeName, ingredients: this.ingredients, 
      imageURL: recipeForm.value.newRecipeImgUrl, 
      description: recipeForm.value.newRecipeDesc}
    this.recipeService.addNewRecipe(this.newRecipe);

    this.addRecipe.storeRecipes(this.newRecipe)
    .subscribe(
      (response) => console.log(response),
      (Error)=> console.log(Error)
    );


    alert("Utworzono nowy przepis");
    this.clearNewRecipe(recipeForm);
  }
}