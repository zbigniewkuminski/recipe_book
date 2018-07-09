import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  ingredients: Ingredient[] = [];

  newIngredientName = '';
  newIngredientAmount = 1;
  sameIngredientCounter = 0;

  errorMsg = '';
  errorStatus = false;

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
        if(this.sameIngredientCounter > 0) {
          this.errorMsg = this.newIngredientName + ' już się znajduje na liście składników.'
          this.errorStatus = true;
          this.newIngredientName = '';
          this.sameIngredientCounter = 0;
        } else {
          this.errorMsg = '';
          this.errorStatus = false;
        }
      }
      if (this.errorStatus === false) {
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
}
