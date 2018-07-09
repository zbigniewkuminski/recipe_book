import { Component, OnInit } from '@angular/core';
import { ItemModel } from './item.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes: ItemModel[] = [ 
    new ItemModel('kanapka','Pokrój chleb. Posmaruj masłem...',['chleb','masło'],'./assets/images/kanapka.jpg'),
    new ItemModel('jajecznica','Rozgrzej patelnię. Wbij jajka',['jajka','chleb'],'./assets/images/jajecznica.jpg'),    
    new ItemModel('ryż','Ugotuj ryż',['ryż'],'./assets/images/ryż.jpg'),  
  ];
  constructor() { }

  ngOnInit() {
  }
  addNewRecipe(recipe: {name: string, description: string, ingredients: string[], imgPath: string}) {
    this.recipes.push(new ItemModel(recipe.name, recipe.description, recipe.ingredients, recipe.imgPath));
  }
}
