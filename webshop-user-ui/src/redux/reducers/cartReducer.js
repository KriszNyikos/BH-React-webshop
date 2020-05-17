
const testInitial = {

    "products": [
        {
            "sku": "SKU001",
            "name": "Macbook Pro",
            "price": 3999,
            "description": "Blabla",
            "specs": "Triolalala",
            "hlighted": 1,
            "stock": 33
        },
        {
            "sku": "SKU002",
            "name": "Macbook Pro2",
            "price": 5945,
            "description": "Blabla",
            "specs": "Triolalala",
            "hlighted": 0,
            "stock": 500
        },
        {
            "sku": "SKU003",
            "name": "Macbook Pro3",
            "price": 5463,
            "description": "Blabla",
            "specs": "Triolalala",
            "hlighted": 0,
            "stock": 6
        }
    ],
    "pictures": [
        {
            "sku": "SKU001",
            "imagePath": "/SKU001/1.jpg",
            "isPrimary": 0
        },
        {
            "sku": "SKU001",
            "imagePath": "/SKU001/2.jpg",
            "isPrimary": 0
        },
        {
            "sku": "SKU002",
            "imagePath": "/SKU002/1.jpg",
            "isPrimary": 1
        },
        {
            "sku": "SKU002",
            "imagePath": "/SKU002/2.jpg",
            "isPrimary": 0
        },
        {
            "sku": "SKU003",
            "imagePath": "/SKU003/1.jpg",
            "isPrimary": 1
        },
        {
            "sku": "SKU003",
            "imagePath": "/SKU003/2.jpg",
            "isPrimary": 0
        }
    ],
    cart: []
}

const initialState = {
    products: [],
    pictures: [],
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
                return { ...newState, products: action.payload.products, pictures: action.payload.pictures }
            }


        default:
            return state
    }

}