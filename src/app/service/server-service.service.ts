import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from '../shared/recipe.model';
import 'rxjs/Rx'; 4

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {

  constructor(private http: Http) { }

  storeRecipes(recipe: Recipe) {
    return this.http.post('https://qchnia-6fca8.firebaseio.com/recipes.json', recipe);
  }

  receiveRecipes() {
    return this.http.get('https://qchnia-6fca8.firebaseio.com/recipes.json');
  }
}
