import { Ingredient } from "../../shared/ingredient.model";
import * as shoppingListActiopns from "./shopping-list.action";



export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
  }


  export interface AppState {
    shoppingList: State;
    }


const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(
    state: State = initialState, 
    action: shoppingListActiopns.ShoppingListActions
    ) {
    switch (action.type) {
        case shoppingListActiopns.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
            case shoppingListActiopns.ADD_INGREDIENTS:
                return {
                    ...state,
                    ingredients: [...state.ingredients, ...action.payload]
                };
            case shoppingListActiopns.UPDATE_INGREDIENT:
                const ingredient = state.ingredients[action.payload.index];
                const updatedIngredient = {
                    ...ingredient,
                    ...action.payload.ingredient
                };
                const updatedIngredients = [...state.ingredients];
                updatedIngredients[action.payload.index] = updatedIngredient;
                return {
                    ...state,
                    ingredients: updatedIngredients
                };
            case shoppingListActiopns.DELETE_INGREDIENT:
                return {
                    ...state,
                    ingredients: state.ingredients.filter((ig, igIndex) => {
                        return igIndex !== action.payload;
                    })
                };
            case shoppingListActiopns.START_EDIT:
                return {
                    ...state,
                    editedIngredientIndex: action.payload,
                    editedIngredient: {...state.ingredients[action.payload]}
                };
            case shoppingListActiopns.STOP_EDIT:
                return {
                    ...state,
                    editedIngredient: null,
                    editedIngredientIndex: -1
                };
        default:
            return state;
    }
}