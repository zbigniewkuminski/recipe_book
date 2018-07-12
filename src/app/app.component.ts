import { Component } from '@angular/core';
import { Recipe } from './shared/recipe.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature = 'Recipes';
  newRecipe = new Recipe('', [], '', '');

  ngOnInit() {

  }

}
