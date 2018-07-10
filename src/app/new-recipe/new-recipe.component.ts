import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  @Input() featureTitle: string;
  @Output() newRecipeEvent = new EventEmitter<Recipe>();
  newRecipe = new Recipe('',[],'','');

  ingredients: Ingredient[] = [];

  newIngredientName = '';
  newIngredientAmount = 1;
  newIngredientImgPath = '';
  sameIngredientCounter = 0;

  errorMsg = '';
  errorStatus = false;

  newRecipeName = '';
  newRecipeImgUrl = '';
  newRecipeDesc = '';

  constructor() { }
  ngOnInit() {
  }

  addIngredient() {
    if (this.newIngredientName === '') {
      this.errorMsg = 'Musisz podać nazwę składnika';
      this.errorStatus = true;
    } else {
      if (this.ingredients.length > 0) {
        this.ingredients.forEach(element => {
          if (element.name === this.newIngredientName) {
            this.sameIngredientCounter++;
          }
        });
        if (this.sameIngredientCounter > 0) {
          this.errorMsg = this.newIngredientName + ' już się znajduje na liście składników.'
          this.errorStatus = true;
          this.newIngredientName = '';
          this.sameIngredientCounter = 0;
        } else {
          this.errorMsg = '';
          this.errorStatus = false;
        }
      }
      if (this.errorStatus === false || this.ingredients.length === 0) {
        this.ingredients.push({ "name": this.newIngredientName, "amount": this.newIngredientAmount });
        this.newIngredientName = '';
        this.newIngredientAmount = 1;
        this.errorStatus = false;
      }
    }
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  clearIngredientsList() {
    this.ingredients = [];
    this.errorMsg = '';
    this.errorStatus = false;
    this.newIngredientAmount = 1;
  }

  createNewRecipe() {
    this.newRecipe = new Recipe(this.newRecipeName, this.ingredients, this.newRecipeImgUrl, this.newRecipeDesc);
    this.newRecipeEvent.emit(this.newRecipe);
  }
}
