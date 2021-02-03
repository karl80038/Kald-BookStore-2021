const Product = require('../models/product');

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/product-list.ejs', {
        products: products,
        pageTitle: 'All Products',
        path: '/'
        }); 
    });
};

exports.getProduct = (req, res) => {
    const productId = req.params.productId;
    Product.findById(productId, product => {
        console.log(product);
        res.render('shop/product-detail.ejs',{
            product: product,
            pageTitle: product.title,
            path: '/products'
        })
    })
    // console.log(req.params.productId);
    // res.redirect('/');
}