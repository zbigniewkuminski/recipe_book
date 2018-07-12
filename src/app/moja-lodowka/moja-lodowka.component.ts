import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-moja-lodowka',
  templateUrl: './moja-lodowka.component.html',
  styleUrls: ['./moja-lodowka.component.css']
})
export class MojaLodowkaComponent implements OnInit {

  constructor() { }

  myFridgeIngredients : Ingredient[] = [
    new Ingredient('jajka',3),
    new Ingredient('masło',1),
    new Ingredient('woda',2),
    new Ingredient('pomidory',3)
  ];

  ngOnInit() {
  }

}
