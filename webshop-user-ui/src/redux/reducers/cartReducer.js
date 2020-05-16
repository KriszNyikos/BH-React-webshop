const initialState =
{
    products: [
        { sku: 'kisku', price: 211, name: 'Kiskutya', stock: 33, highlighted: true },
        { sku: 'kisci', price: 333, name: 'Kiscica', stock: 34, highlighted: true },
        { sku: 'kisha', price: 456, name: 'Kishalacska', stock: 23, highlighted: false },
        { sku: 'sargka', price: 789, name: 'Sárgakacsa', stock: 3, highlighted: false },
        { sku: 'barku', price: 2166, name: 'Barnakutya', stock: 55, highlighted: false },
        { sku: 'keci', price: 323, name: 'Kékcica', stock: 13, highlighted: false },
        { sku: 'fuha', price: 476, name: 'Furahalacska', stock: 56, highlighted: false },
        { sku: 'mima', price: 7209, name: 'Milyenkacsa', stock: 7, highlighted: true },
    ],
    pictures: [
        { sku: 'kisku',
         picArr: ['https://i.picsum.photos/id/10/2500/1667.jpg', 'https://i.picsum.photos/id/1000/5626/3635.jpg', 'https://i.picsum.photos/id/100/2500/1656.jpg', 'https://i.picsum.photos/id/1001/5616/3744.jpg'],
        main: 0 },
        { sku: 'kisci', picArr: ['https://i.picsum.photos/id/10/2500/1667.jpg', 'https://i.picsum.photos/id/1000/5626/3635.jpg', 'https://i.picsum.photos/id/100/2500/1656.jpg', 'https://i.picsum.photos/id/1001/5616/3744.jpg'],
        main: 1 },
        { sku: 'kisha', picArr: ['https://i.picsum.photos/id/10/2500/1667.jpg', 'https://i.picsum.photos/id/1000/5626/3635.jpg', 'https://i.picsum.photos/id/100/2500/1656.jpg', 'https://i.picsum.photos/id/1001/5616/3744.jpg'],
        main: 2},
        { sku: 'sargka', picArr: ['https://i.picsum.photos/id/10/2500/1667.jpg', 'https://i.picsum.photos/id/1000/5626/3635.jpg', 'https://i.picsum.photos/id/100/2500/1656.jpg', 'https://i.picsum.photos/id/1001/5616/3744.jpg'],
        main: 3},
        { sku: 'barku', picArr: ['https://i.picsum.photos/id/10/2500/1667.jpg', 'https://i.picsum.photos/id/1000/5626/3635.jpg', 'https://i.picsum.photos/id/100/2500/1656.jpg', 'https://i.picsum.photos/id/1001/5616/3744.jpg'],
        main: 4 },
        { sku: 'keci', picArr: ['https://i.picsum.photos/id/10/2500/1667.jpg', 'https://i.picsum.photos/id/1000/5626/3635.jpg', 'https://i.picsum.photos/id/100/2500/1656.jpg', 'https://i.picsum.photos/id/1001/5616/3744.jpg'],
        main: 2 },
        { sku: 'fuha', picArr: ['https://i.picsum.photos/id/10/2500/1667.jpg', 'https://i.picsum.photos/id/1000/5626/3635.jpg', 'https://i.picsum.photos/id/100/2500/1656.jpg', 'https://i.picsum.photos/id/1001/5616/3744.jpg'],
        main: 1 },
        { sku: 'mima', picArr: ['https://i.picsum.photos/id/10/2500/1667.jpg', 'https://i.picsum.photos/id/1000/5626/3635.jpg', 'https://i.picsum.photos/id/100/2500/1656.jpg', 'https://i.picsum.photos/id/1001/5616/3744.jpg'],
        main: 3}
    ],
    cart: []
}

export default function cartReducer(state = initialState, action) {

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
                const { cart, products } = newState

                cart.forEach(cartEl => {

                    products.forEach(productEl => {

                        if (cartEl.sku === productEl.sku) productEl.stock += cartEl.quantity
                    });
                })
                return { ...newState, cart: [] }
            }

            case 'UPDATE_DATAS':
                {
                    return state
                }


        default:
            return state
    }

}