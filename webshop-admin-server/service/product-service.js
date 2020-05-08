const path = require('path')
const Product = require('../ModelObjects/Product')

class ProductService {
    constructor(repository) {
        this.repository = repository;
    }

    async productsAll() {
        let result = await this.repository.productsAll();
        return result;
    }

    async findBySku(sku) {
        const result = await this.repository.productBySku(sku)
        return result
    }

    update(product) {
       const {sku, name, price, description, specs, stock, warn_at} = product
        this.repository.updateProductDetails(new Product(sku, name, price, description, specs))
        this.repository.updateStock({sku, warn_at, stock})
    }

    newProduct(sku, name, price, description, specs, imagesPath) {
        this.repository.newProductDetails(sku, name, price, description, specs);

        if (imagesPath.length > 0) {
            imagesPath.forEach((element, i) => {
                if (i === 0) {
                    this.repository.newProductImages(sku, element, 1);
                    return
                }
                this.repository.newProductImages(sku, element, 0);
            });

            return;
        }

      this.repository.newProductImages(sku, "No image", 1);
    }

    async imgsBySku(sku) {
        let path = await this.repository.imagesBySkuAll(sku)
        return path
    }

    changePrimary(id) {
        this.repository.changePrimaryImage(id)
    }

    async updateImages(sku, imagesPaths) {

        if (imagesPaths.length > 0) {
            imagesPaths.forEach((element) => {
                this.repository.newProductImages(sku, element, 0);
            });
        }
        const exactPath = path.resolve('uploads')
        const imagesPath = await this.repository.imagesBySkuAll(sku)
        imagesPath.forEach(path => { path.realPath = exactPath + path.imagePath })
        return imagesPath
    }

    async delImage(id) {
        const path = await this.repository.findImagePath(id)
        await this.repository.imageDelete(id)
        return path
    }

    delProduct(sku){
        this.repository.deleteBySku(sku)
    }

   async stockStatus(sku){
        return await this.repository.getStockStatus(sku)
       // return stock
    }
}

module.exports = ProductService;