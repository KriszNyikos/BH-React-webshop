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
    const newState = { ...state }


    switch (action.type) {
        case 'ADD_TO_CART':
            {
                const product = newState.products.filter(e => e.sku === action.payload.sku)[0]
                const cartProduct = newState.cart.filter(e => e.sku === action.payload.sku)


                if (product.stock !== 0 && cartProduct) {

                    newState.products.forEach((product, index) => {
                        if (product.sku === action.payload.sku && product.stock > 0) {
                            newState.products[index] = { ...newState.products[index], stock: product.stock - 1 }
                        }
                    });

                    if ((newState.cart.findIndex(product => product.sku === action.payload.sku)) >= 0) {
                        newState.cart.forEach((product, index) => {
                            if (product.sku === action.payload.sku) {
                                newState.cart[index] = { ...newState.cart[index], quantity: product.quantity + 1 }

                            }
                        });
                        newState.cart = [...newState.cart]
                        return newState
                    }


                    newState.cart = [...newState.cart, { sku: product.sku, price: product.price, quantity: 1, name: product.name }]

                }
                return newState
            }

        case 'REMOVE_FROM_CART':
            {
                //const product = newState.products.filter(e => e.sku === action.payload.sku)[0]
                const cartProduct = newState.cart.filter(e => e.sku === action.payload.sku)[0]

                if ( cartProduct && cartProduct.quantity >= 1) {

                    newState.products.forEach((product, index) => {
                        if (product.sku === action.payload.sku && product.stock >= 0) {
                            newState.products[index] = { ...newState.products[index], stock: product.stock + 1 }
                        }
                    });

                    if ((newState.cart.findIndex(product => product.sku === action.payload.sku && product.quantity !== 0)) >= 0) {  /// megnézni
                        newState.cart.forEach((product, index) => {
                            if (product.sku === action.payload.sku) {
                                newState.cart[index] = { ...newState.cart[index], quantity: product.quantity - 1 }
                            }
                        });
                        newState.cart = newState.cart.filter(e => e.quantity !== 0)
                        newState.cart = [...newState.cart]
                        return newState
                    }
                }

            return newState
            }


        default:
            return state
    }
}