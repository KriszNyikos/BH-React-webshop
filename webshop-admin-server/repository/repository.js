const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('Products2.db');
const Product = require('../ModelObjects/Product')

class Repository {

  async productsAll() {
    const prods = new Promise((resolve, reject) => {
      db.serialize(function () {
        db.all("SELECT sku, name, price FROM products", (err, results) => {
          if (err) {
           // console.log(err)
            reject(err)
          }
          resolve(results)
        })
      })
    })
    const awaitedProds = await prods;

    const prodsWImgs = new Promise((resolve,reject) => {
      db.serialize(async function() {
        const imgs = [];        
        awaitedProds.forEach( prod => {
          db.get("SELECT imagePath FROM images WHERE sku = ? AND isPrimary = 1", prod.sku, (err,img) => {
            if(!img) {
              const noImage = {
                ...prod,
                imagePath: 'No image'
              }
              imgs.push(noImage);
              return;
            }

            const withImage = {
              ...prod,
              imagePath:img.imagePath
            }
            imgs.push(withImage);

          })
        })
        
        resolve(imgs);
      })
    })

    return await prodsWImgs;
  }

  productBySku(sku) {
    return new Promise((resolve, reject) => {
      db.serialize(function () {
        let sql = `SELECT sku, name, price, description, specs FROM products WHERE sku = '${sku}'`
        db.all(sql, (err, results) => {
          if (err) {
            console.log(err)
            reject(err)
          }
          resolve(results.find(product => product))
        })
      })
    })
  }

  newProductDetails(sku, name, price, description, specs) {
    db.serialize(function () {
      console.log(`Hello ez hozzáadás ${sku, name}`);
      db.run(`INSERT INTO products (sku, name, price, description, specs) VALUES (?, ?, ?, ?, ?)`, [sku, name, price, description, specs])
    })
  }

  newProductImages(sku, imagesPath, isPrimary) {
    db.serialize(function () {
      db.run(`INSERT INTO images (sku, imagePath, isPrimary) VALUES (?, ?, ?)`, [sku, imagesPath, isPrimary])
    })
  }

  updateProductDetails(product) {
    const { sku, name, price, description, specs } = product
    console.log(sku, name, price, description, specs)

    db.serialize(function () {
      let sql = `UPDATE products 
                    SET name = ?,
                    price = ?,
                    description = ?,
                    specs = ?
                    WHERE sku = ? `
      let params = [name, price, description, specs, sku]
      db.run(sql, params)
    })
  }

  newPrimary(sku, imageId) {
    console.log(sku, imageId)

    // Elsőnek törlöm az sku-hoz tartozó primary imaget
    db.serialize(function () {
      let delSql = `UPDATE images
                    SET isPrimary = 0
                    WHERE isPrimary = 1 
                    AND sku= ?`
      let delParams = [sku]


      // Majd beállítom az újat
      let newSql = `UPDATE images
                    SET isPrimary = 1,
                    WHERE sku = ? 
                    AND rowid = ?`
      let newParams = [sku, imageId]


      db.run(delSql, delParams)
        .run(newSql, newParams)
    })

  }

  imagesBySkuAll(sku) {
    return new Promise((resolve, reject) => {
      db.serialize(function () {
        let sql = `SELECT rowid as id, imagePath, isPrimary FROM images WHERE sku = '${sku}' AND imagePath != 'No image'`
        db.all(sql, (err, results) => {
          if (err) {
            console.log(err)
            reject(err)
          }
          resolve(results)
        })
      })
    })
  }

  async  imageDelete(id) {
    db.serialize(function () {
      let delSql = `DELETE FROM images WHERE rowid = ${id}`
      db.run(delSql)
    })
  }

  async findImagePath(id) {
    return new Promise((resolve, reject) => {
      db.serialize(function () {
        const findPathById = `SELECT imagePath FROM images WHERE rowid = ${id}`
         db.get(findPathById, (err, result) => {
          if (err) reject(err)
          console.log(result)
          resolve(result.imagePath)
        })
      })
    })
  }

  changePrimaryImage(id){
    return new Promise((resolve, reject) => {
        db.serialize(function (){
            const findPrevPrimary = `SELECT sku FROM images WHERE rowid = ${id}`
            db.get(findPrevPrimary,
                (err, result)=>{
                    if(err){
                        reject(err)  
                      } 
                   db.run(`UPDATE images SET isPrimary = 0 WHERE sku = "${result.sku}" AND isPrimary = 1`, (err)=>{
                       if(err){
                          reject(err) 
                       }
                        db.run(`UPDATE images SET isPrimary = 1 WHERE rowid = ${id}`, 
                        (err)=>{if(!err){
                            reject(err)  
                          }
                        resolve("DONE")
                        })
                        
                   })
                })
        })
    })

  }

  skuIsUsed(sku) {
    return new Promise((resolve, reject) => {
      db.serialize(function () {
        db.get("Select sku FROM products WHERE sku = ?", sku, (err, result) => {
          if (err) {
            console.log(err)
            reject(err)
          }
          resolve(result)
        })
      })
    })
  }

  deleteBySku(sku){
    const sql = `DELETE FROM products WHERE sku = '${sku}'`
    const imgSql = `DELETE FROM images WHERE sku = '${sku}'`
    db.serialize(function(){
      db.run(sql)
      db.run(imgSql)
    })

  }


  updateStock(state){
   const {stock, warn_at, sku} = state
    console.log('Updatestock, ',stock, warn_at)
  }
}





module.exports = Repository;