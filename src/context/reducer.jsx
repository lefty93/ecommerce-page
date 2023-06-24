export const initialState = {
    cart: []
}

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItemIndex = state.cart.findIndex(
                (item) => item.id === action.product.id
            );
            if (existingItemIndex !== -1) {
                const updatedCart = state.cart.map((item, index) => {
                    if (index === existingItemIndex) {
                        return {
                            ...item,
                            count: item.count + 1
                        }
                    }
                    return item;
                });
                const updatedState = {
                    ...state,
                    cart: updatedCart
                };
                return updatedState;
            } else {
                const newItem = {
                    ...action.product,
                    count: 1
                };
                const updatedState = {
                    ...state,
                    cart: [...state.cart, newItem]
                };
                return updatedState;
            }

        case "REMOVE_FROM_CART":
            const updatedCart = state.cart.filter((item) => item.id !== action.id);
            if (updatedCart.length === state.cart.length) {
                console.warn(`Can't remove product ${action.id}`);
                return state;
            }
            const updatedState = {
                ...state,
                cart: updatedCart
            };
            return updatedState;

    }
}


export default reducer