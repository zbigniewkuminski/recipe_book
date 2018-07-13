import { Component, OnInit, Input, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-sho pping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[] = [];
  @Output() listMissingIngredients: Ingredient[] = [];
  newShoppingListItemName: string = '';
  newShoppingListItemAmount: number = 1;
  errorMessage: string = '';

  @Input() featureTitle: string;
  constructor() { }

  ngOnInit() {

  }
  
  addToShoppingList() {
    if (this.newShoppingListItemName === '' ) {
      this.errorMessage = 'Podaj co chcesz dopisać do listy';
    } else {
      this.shoppingList.push({ "name": this.newShoppingListItemName, "amount": this.newShoppingListItemAmount });
      this.errorMessage = '';
    }
  }

  isCorrect() {
    if (this.newShoppingListItemAmount < 1 || this.newShoppingListItemAmount > 99) {
      this.newShoppingListItemAmount = 1;
    }
  }
}