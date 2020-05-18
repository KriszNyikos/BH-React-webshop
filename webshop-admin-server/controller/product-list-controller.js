//Controlls the product lists
class ProductListController {
    constructor(productService) {
        this.productService = productService;
    }

    async products(req, res) {
        let productsArr = await this.productService.productsAll();
            setTimeout(() => {
                res.json({ products: productsArr })
            }, 1000);
 
    }


   async storeData(req, res){
        
      const  data = await this.productService.cartProducts()

        res.json(data)
    }

}

module.exports = ProductListController;