import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  ingredient = [];
  newIngredient = '';
  errorMsg = '';
  errorStatus = false;

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
      if(this.newIngredient === '') {
        this.errorMsg = 'Nie podałeś składnika!!!';
      } else {
        if(!this.ingredient.includes(this.newIngredient)) {
          this.ingredient.push(this.newIngredient);
          this.newIngredient='';
          this.errorMsg = '';
        } else {
          this.errorMsg = 'Sładnik "'+ this.newIngredient + '" już jest na liście';

        }
      }
      if(this.errorMsg === '') {
        this.errorStatus = false;
      } else {
        this.errorStatus = true;
      }
    }
  
  deleteIngredient(index: number) {
    this.ingredient.splice(index, 1);
  }
}
