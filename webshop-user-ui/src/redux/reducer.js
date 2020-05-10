const initialState =
{
    products: [
        { price: 211, name: 'Kiskutya', stock: 33 },
        { price: 333, name: 'Kiscica', stock: 34 },
        { price: 456, name: 'Kishalacska', stock: 23 },
        { price: 789, name: 'Sárgakacsa', stock: 3 },
        { price: 2166, name: 'Barnakutya', stock: 55 },
        { price: 323, name: 'Kékcica', stock: 13 },
        { price: 476, name: 'Furahalacska', stock: 56 },
        { price: 7209, name: 'Milyenkacsa', stock: 7 },
    ],
    pictures: [],
    cart: [
        { price: 211, name: 'Kiskutya', quantity: 3 },
        { price: 333, name: 'Kiscica', quantity: 3 }
    ]
}

export default function (state = initialState, action) {

    switch (action.type) {
        case 'ADD_TO_CART':
            const newState = { ...state }
            newState.cart = [...newState.cart, action.payload]
            return newState

        default:
            return state
    }
}