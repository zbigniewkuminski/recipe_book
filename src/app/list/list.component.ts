import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { AddRecipeService } from '../service/add-recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [AddRecipeService]
})
export class ListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Input() featureTitle: string;

  constructor(private addRecipe: AddRecipeService) { }

  ngOnInit() {
    this.recipes = this.addRecipe.recipes;
  }

}
