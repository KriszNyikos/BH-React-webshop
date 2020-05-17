class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }

    newOrder(req, res){
        console.log(req.body)
       const {cart, customer} = req.body
       const items = JSON.stringify(cart)

        cart.forEach(item => {
            this.orderService.decreaseQuantity({sku: item.sku, quantity: item.quantity})
        });

        const orderData = {cust_name: customer.name, address: customer.address, cart: items}
        this.orderService.addNewOrder(orderData)
    }

  async orders(req, res){
       const orders = await this.orderService.getOrders()
       orders.forEach(e =>{
           e.items = JSON.parse(e.items)
       })
       res.json(orders)
      //  console.log('In controler',orders)
    }

}

module.exports = OrderController;