//Controlls the product lists
class ProductListController {
    constructor(productService) {
        this.productService = productService;
    }

    async products(req, res) {
        const productsArr = await this.productService.productsAll();
        setTimeout(() => {
            res.json({ products: productsArr })
        }, 5000);
    }

}

module.exports = ProductListController;