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
                const productIdx = newState.products.findIndex(e => e.sku === action.payload.sku)
                const cartIdx = newState.cart.findIndex(e => e.sku === action.payload.sku)

                if (newState.products[productIdx].stock === 0) return newState

                newState.products[productIdx] = { ...newState.products[productIdx], stock: newState.products[productIdx].stock - 1 }


                if (cartIdx === -1) return {
                    ...newState,
                    cart: [...newState.cart, { sku: newState.products[productIdx].sku, price: newState.products[productIdx].price, quantity: 1, name: newState.products[productIdx].name }]
                }

                newState.cart[cartIdx] = { ...newState.cart[cartIdx], quantity: newState.cart[cartIdx].quantity + 1 }
                return { ...newState, cart: [...newState.cart] }

            }

        case 'REMOVE_FROM_CART':
            {
                const cartIdx = newState.cart.findIndex(e => e.sku === action.payload.sku)
                const productIdx = newState.products.findIndex(e => e.sku === action.payload.sku)


                if (cartIdx === -1) return newState

                newState.products[productIdx] = { ...newState.products[productIdx], stock: newState.products[productIdx].stock + 1 }
                newState.cart[cartIdx] = { ...newState.cart[cartIdx], quantity: newState.cart[cartIdx].quantity - 1 }



                if (newState.cart[cartIdx].quantity === 0) newState.cart = newState.cart.filter(e => e.quantity !== 0)

                return { ...newState, products: [...newState.products], cart: [...newState.cart] }


            }

         case 'EMPTY_CART':
             {  
                 const {cart, products} = newState

                cart.forEach(cartEl => {

                    products.forEach(productEl => {

                        if(cartEl.sku === productEl.sku) productEl.stock += cartEl.quantity
                    });
                })
                return {...newState, cart: []}
             }


        default:
            return state
    }
}