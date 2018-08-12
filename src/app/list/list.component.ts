import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { AddRecipeService } from '../service/add-recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent implements OnInit {
  recipes: Recipe[] = [];

  recipePagination: Recipe[];
  recipesOnPage = 3;
  page = 1;
  numberOfPages = 1;

  @Input() featureTitle: string;
  constructor(private recipeService: AddRecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipesArray;
    this.numberOfPages = this.recipes.length / this.recipesOnPage;
    this.recipePagination = [];
    this.loadedRecipes();
  }
  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
  }

  prevPage() {
    this.page--;
    this.recipePagination = [];
    this.loadedRecipes();
  }

  nextPage() {
    this.page++;
    this.recipePagination = [];
    this.loadedRecipes();
  }

  loadedRecipes() { /* paginacja */
    this.recipes.forEach((recipe, index) => {
      if ((index >= ((this.page - 1) * this.recipesOnPage)) &&
        (index <= (this.page * this.recipesOnPage) - 1)) {
        this.recipePagination.push(recipe);
      }
    });
    console.log(this.recipePagination);
  }
}
