//Controlls the product lists
class ProductListController {
    constructor(productService) {
        this.productService = productService;
    }

    async products(req, res) {
        let productsArr = await this.productService.productsAll();
            setTimeout(() => {
                res.json({ products: productsArr })
            }, 2000);
 
    }

}

module.exports = ProductListController;