import { Component, OnInit, Input, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { AddShoppingListService } from '../service/addShoppingList.service';
import { MyFridgeServiceService } from '../service/my-fridge-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sho pping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[] = [];
  @Output() listMissingIngredients: Ingredient[] = [];
  errorMessage: string = '';
  ingredientUnit = ['szt', 'kg', 'l'];


  @Input() featureTitle: string;

  constructor(private shoppingService: AddShoppingListService,
    private myFridgeService: MyFridgeServiceService) { }

  ngOnInit() {
    this.shoppingList = this.shoppingService.ingredientsArray;
  }

  addToShoppingList(form: NgForm) {
    console.log(form);
    this.shoppingList.push({ "name": form.value.newShoppingListItemName, "amount": form.value.newShoppingListItemAmount, "unit": form.value.unit })
    form.reset();
  }

  removeFromList(id: number) {
    this.shoppingList.splice(id, 1);
  }
  clearShoppingList() {
    this.shoppingList = [];
    this.shoppingService.ingredientsArray = [];
  }
  buyIngredients() {
    this.myFridgeService.buyIngredients(this.shoppingList);
    this.shoppingService.resetMissingIngredients();
    this.shoppingList = [];
    alert("Dokonano zakupu. Sprawdź zapasy w zakładce `Moja lodówka`.");
  }
}