import { Ingredient } from "../../shared/ingredient.model";
import * as shoppingListActiopns from "./shopping-list.action";



export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
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
                const ingredient = state.ingredients[state.editedIngredientIndex];
                const updatedIngredient = {
                    ...ingredient,
                    ...action.payload
                };
                const updatedIngredients = [...state.ingredients];
                updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
                return {
                    ...state,
                    ingredients: updatedIngredients,
                    editedIngredient: null,
                    editedIngredientIndex: -1
                };
            case shoppingListActiopns.DELETE_INGREDIENT:
                return {
                    ...state,
                    ingredients: state.ingredients.filter((ig, igIndex) => {
                        return igIndex !== state.editedIngredientIndex;
                    }),
                    editedIngredient: null,
                    editedIngredientIndex: -1
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