import { Ingredient } from "./ingredient.model";

export class Recipe {
    constructor(
        public name: string, 
        public ingredients: Ingredient[], 
        public imageURL: string, 
        public description: string){}
}