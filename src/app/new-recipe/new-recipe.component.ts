import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../shared/recipe.model';
import { AddRecipeService } from '../service/add-recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  @Input() featureTitle: string;

  newIngredientName = '';
  newIngredientAmount = 1;
  newIngredientImgPath = '';
  sameIngredientCounter = 0;
  ingredients: Ingredient[] = [];

  errorMsg = '';
  errorStatus = false;

  newRecipe = new Recipe('', [], '', '');
  newRecipeName = '';
  newRecipeImgUrl = '';
  newRecipeDesc = '';

  constructor(private recipeService: AddRecipeService) { }
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
    this.newIngredientName = '';
  }
  clearNewRecipe() {
    this.clearIngredientsList();
    this.newRecipeName = '';
    this.newRecipeImgUrl = '';
    this.newRecipeDesc = '';
  }
  createNewRecipe() {
    if (this.newRecipeName !== '' && this.newRecipeDesc !== '' && this.ingredients.length !== 0) {
      this.newRecipe.name = this.newRecipeName;
      this.newRecipe.ingredients = this.ingredients;
      this.newRecipe.description = this.newRecipeDesc;
      this.newRecipe.imageURL = this.newRecipeImgUrl;

      this.recipeService.addNewRecipe(this.newRecipe);

      alert("Utworzono nowy przepis");
      this.clearIngredientsList();
      this.newRecipeName = '';
      this.newRecipeImgUrl = '';
      this.newRecipeDesc = '';
    } else {
      alert("Wypełnij wszystkie pola");
    }
  }
  isCorrect() {
    if (this.newIngredientAmount < 1 || this.newIngredientAmount > 99) {
      this.newIngredientAmount = 1;
    }
  }
}
