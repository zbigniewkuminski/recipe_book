import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { Highlight } from './directives/highlight.directive';
import { AddRecipeService } from './service/add-recipe.service';
import { Routes, RouterModule } from '@angular/router';
import { MojaLodowkaComponent } from './moja-lodowka/moja-lodowka.component';
import { IngredientAmountValidation } from './directives/ingredientAmountValidation.directive';
import { MatButtonModule, MatCheckboxModule,MatInputModule } from '@angular/material';
import { RecipeComponent } from './list/recipe/recipe.component';
import { ServerServiceService } from './service/server-service.service';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'new-recipe', component: NewRecipeComponent },
  { path: 'page/:page', component: ListComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'my-fridge', component: MojaLodowkaComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ShoppingListComponent,
    NewRecipeComponent,
    Highlight,
    MojaLodowkaComponent,
    IngredientAmountValidation,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    HttpModule
  ],
  providers: [AddRecipeService,
    ServerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
