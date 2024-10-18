// src/redux/reducers/cartReducer.js
const initialState = {
    items: [],
    totalItems: 0,
    totalCost: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if item already exists in cart
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                // If it exists, increase the quantity
                const updatedItems = state.items.map((item, index) => {
                    if (index === existingItemIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                const newTotalItems = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
                const newTotalCost = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
                return { ...state, items: updatedItems, totalItems: newTotalItems, totalCost: newTotalCost };
            } else {
                // If it doesn't exist, add it to the cart with quantity 1
                const newItem = { ...action.payload, quantity: 1 };
                return { 
                    ...state, 
                    items: [...state.items, newItem], 
                    totalItems: state.totalItems + 1,
                    totalCost: state.totalCost + action.payload.price 
                };
            }
        
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                totalItems: state.totalItems + 1,
                totalCost: state.totalCost + action.payload.price,
            };

        case 'DECREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ).filter(item => item.quantity > 0), // Remove item if quantity is 0
                totalItems: state.items.filter(item => item.id === action.payload.id).length > 0
                    ? state.totalItems - 1
                    : state.totalItems,
                totalCost: state.totalCost - action.payload.price,
            };

        default:
            return state;
    }
};

export default cartReducer;
