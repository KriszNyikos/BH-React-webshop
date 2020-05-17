
class OrderService {
    constructor(repository) {
        this.repository = repository;
    }

    decreaseQuantity(data){
        this.repository.decreaseQ(data)
    }

    addNewOrder(data){
        this.repository.newOrder(data)
    }

    getOrders(){
        this.repository.allOrder()
    }
}


module.exports = OrderService;