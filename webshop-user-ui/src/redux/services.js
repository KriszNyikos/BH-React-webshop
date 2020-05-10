const mapStateToAllProps = state => {
    return {...state}
}

const mapStatetoHeaderCart = state => {
    const {products, cart} = state
    return {products, cart}
}

module.exports = {
    mapStateToAllProps,
    mapStatetoHeaderCart
}