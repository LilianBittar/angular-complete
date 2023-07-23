import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { Store } from "@ngrx/store";
import * as ShoppingListActions from '../shopping-list/store/shopping-list.action';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipeService{
  recipeChanged = new Subject<Recipe[]>(); 
  
    //private recipes: Recipe[] = [
      //  new Recipe('A cute cat', 
        //'This is simply a white cat', 
        //'https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg',
        //[
          //new Ingredient('Meat', 1),
          //new Ingredient('French Fries', 20)
        //]),
        
        //new Recipe('An amazing cat', 
        //'This is simply a black cat',
        //'https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=1200&quality=85&auto=format&fit=max&s=4219f64fafe19d101f92e0eba0181f6a',
        //[
          //new Ingredient('Buns', 2),
          //new Ingredient('Meat', 1)
        //]),
      //];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService, 
    private store: Store<fromShoppingList.AppState>) 
  { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe : Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
  
}