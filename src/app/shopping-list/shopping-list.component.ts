import { Component, OnInit, Input, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { AddShoppingListService } from '../service/addShoppingList.service';
import { MyFridgeServiceService } from '../service/my-fridge-service.service';

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
  newShoppingListItemUnit: string = '';
  errorMessage: string = '';

  @Input() featureTitle: string;

  constructor(private shoppingService :AddShoppingListService,
  private myFridgeService: MyFridgeServiceService) { }

  ngOnInit() {
    this.shoppingList = this.shoppingService.ingredientsArray;
  }
  
  addToShoppingList() {
    if (this.newShoppingListItemName === '' ) {
      this.errorMessage = 'Podaj co chcesz dopisać do listy';
    } else {
      this.shoppingList.push({ "name": this.newShoppingListItemName, "amount": this.newShoppingListItemAmount, "unit": this.newShoppingListItemUnit });
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
  buyIngredients() {
    this.myFridgeService.buyIngredients(this.shoppingList);
    this.shoppingService.resetMissingIngredients();
    this.newShoppingListItemName = '';
    this.newShoppingListItemAmount = 1;
    this.newShoppingListItemUnit = '';
    this.shoppingList = [];
    alert("Dokonano zakupu. Sprawdź zapasy w zakładce `Moja lodówka`.");
  }
}