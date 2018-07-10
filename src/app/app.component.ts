import { Component } from '@angular/core';
import { Recipe } from './shared/recipe.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature = 'Recipes';
  newRecipe = new Recipe('',[],'','');

  receiveEvent(receivedRecipe: Recipe) {
    this.newRecipe = receivedRecipe;
    console.log(this.newRecipe);
  }
  
}
