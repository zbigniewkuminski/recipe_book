import { Injectable, Output, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class AddShoppingListService {
    ingredientsArray: Ingredient[] = [];

    constructor() { }

    addMissingIngredients(missingIng: Ingredient[]) {
        this.ingredientsArray = missingIng;
        console.log('w serwisie!!');
        console.log(this.ingredientsArray);
    }
}