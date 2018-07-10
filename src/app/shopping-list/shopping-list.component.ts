import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Array<string> = [];
  newShoppingListItem: string ='';
  errorMessage: string;
  @Input() featureTitle: string;
  constructor() { }

  ngOnInit() {
  }
  addToShoppingList() {
    if (this.newShoppingListItem === '') {
      this.errorMessage = 'Podaj co chcesz dopisać do listy';
    } else {
      if (!this.shoppingList.includes(this.newShoppingListItem)) {
        this.shoppingList.push(this.newShoppingListItem);
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Na liście jest już ';
      }
    }
  }
  removeFromShoppingList() {

  }
}
