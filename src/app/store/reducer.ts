import { ImageActionTypes, ImageActions } from "./actions";

export let initialState = {
    Cart:[],
    item:[]
}

export function reducer(state=initialState, action: ImageActions) {
    switch (action.type) {
        case ImageActionTypes.ADD_PRODUCT: 
            return {
                ...state,
                Cart: [...state.Cart, action.payload]
            }
            case ImageActionTypes.Update:
                return {
                    ...state,
                    Cart: [...action.payload.arr,
                  ...state.Cart.filter(item => item.name !== action.payload.pName)]
                };
            case ImageActionTypes.LoadItems:
                return  {
                    ...state,
                    item:[{queryString:action.payload.queryString,...state.item}]
                }
            case ImageActionTypes.LoadSuccess:
                return {
                    ...state,
                    item:[action.payload]
                  };
        default: 
            return state    
    }
}
