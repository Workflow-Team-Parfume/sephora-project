import {CartItemDto} from "../../models/Cart/CartItemDto.ts";
import {UnknownAction} from "@reduxjs/toolkit";

export const CartActionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
    SET_CART: "SET_CART",
}

export interface ICartState {
    cart: CartItemDto[];
}

export const initState: ICartState = {
    cart: [],
}

export const CartReducer = (
    state: ICartState = initState,
    action: UnknownAction
): ICartState => {
    const payload = action.payload as CartItemDto[] | undefined;
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, ...payload ?? []],
            };
        }
        case CartActionTypes.CLEAR_CART: {
            return {
                ...state,
                cart: [],
            };
        }
        case CartActionTypes.SET_CART: {
            return {
                ...state,
                cart: [...payload ?? []]
            };
        }
        case CartActionTypes.REMOVE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(el => !payload!.includes(el)),
            };
        }
        default:
            return state;
    }
}

export const addToCart = (items: CartItemDto[]) => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: items,
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART,
    payload: undefined,
});

export const setCart = (items: CartItemDto[]) => ({
    type: CartActionTypes.SET_CART,
    payload: items,
});

export const removeFromCart = (items: CartItemDto[]) => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: items,
});

