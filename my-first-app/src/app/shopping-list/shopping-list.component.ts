import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.action';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Observable< { ingredients: Ingredient[] } >; 
  private igChangedSub: Subscription;

  constructor (
              private loggingService: LoggingService,
              private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
      this.ingredients = this.store.select('shoppingList');
      // this.ingredients = this.slService.getIngredients();
      // this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit');
      // this.igChangedSub = this.slService.ingredientsChanged.
      // subscribe(
      //   (ingredients: Ingredient[]) => {
      //   this.ingredients = ingredients;
      // })
  }

  onEditItem(index: number){
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
  ngOnDestroy(){
    // this.igChangedSub.unsubscribe();
  }
 
}
