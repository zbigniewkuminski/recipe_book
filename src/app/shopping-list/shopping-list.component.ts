import { Component, OnInit, Input, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { AddShoppingListService } from '../service/addShoppingList.service';

@Component({
  selector: 'app-sho pping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[] = [];
  @Output() listMissingIngredients: Ingredient[] = [];
  newShoppingListItemName: string = '';
  newShoppingListItemAmount: number = 1;
  errorMessage: string = '';

  @Input() featureTitle: string;

  constructor(private shoppingService :AddShoppingListService) { }

  ngOnInit() {
    this.shoppingList = this.shoppingService.ingredientsArray;
  }
  
  addToShoppingList() {
    if (this.newShoppingListItemName === '' ) {
      this.errorMessage = 'Podaj co chcesz dopisać do listy';
    } else {
      this.shoppingList.push({ "name": this.newShoppingListItemName, "amount": this.newShoppingListItemAmount });
      this.errorMessage = '';
      this.newShoppingListItemName = '';
      this.newShoppingListItemAmount = 1;
    }
  }

  isCorrect() {
    if (this.newShoppingListItemAmount < 1 || this.newShoppingListItemAmount > 99) {
      this.newShoppingListItemAmount = 1;
    }
  }
  removeFromList(id: number) {
    this.shoppingList.splice(id, 1);
  }
  clearShoppingList() {
    this.newShoppingListItemName = '';
    this.newShoppingListItemAmount = 1;
    this.shoppingList = [];
  }
}