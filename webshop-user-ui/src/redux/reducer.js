const initialState =
{
    products: [
        { sku: 'kisku', price: 211, name: 'Kiskutya', stock: 33 },
        { sku: 'kisci', price: 333, name: 'Kiscica', stock: 34 },
        { sku: 'kisha', price: 456, name: 'Kishalacska', stock: 23 },
        { sku: 'sargka', price: 789, name: 'Sárgakacsa', stock: 3 },
        { sku: 'barku', price: 2166, name: 'Barnakutya', stock: 55 },
        { sku: 'keci', price: 323, name: 'Kékcica', stock: 13 },
        { sku: 'fuha', price: 476, name: 'Furahalacska', stock: 56 },
        { sku: 'mima', price: 7209, name: 'Milyenkacsa', stock: 7 },
    ],
    pictures: [],
    cart: []
}

export default function (state = initialState, action) {

    switch (action.type) {
        case 'ADD_TO_CART':
            const newState = { ...state }

            newState.products.forEach((product, index) => {
                if (product.sku === action.payload.sku) {
                    newState.products[index] = { ...newState.products[index], stock: product.stock - action.payload.quantity}
                }
            });


            if ((newState.cart.findIndex(product => product.sku === action.payload.sku)) >= 0) {
                newState.cart.forEach((product, index) => {
                    if (product.sku === action.payload.sku) {
                        newState.cart[index] = { ...newState.cart[index], quantity: product.quantity + action.payload.quantity}

                    }
                });
                newState.cart = [...newState.cart]
                return newState
            }
            newState.cart = [...newState.cart, action.payload]
            return newState

        default:
            return state
    }
}