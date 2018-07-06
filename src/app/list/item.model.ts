export class ItemModel {
    public name: string;
    public ingredients: string[];
    public description: string;
    public imagePath: string;
    constructor(name: string, description: string, ingredients: string[], imagePath: string) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.imagePath = imagePath;
    }
}