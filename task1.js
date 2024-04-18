function calculateDiscountedPrice(products, discountPercentage) {
return products.map(product => {
    const discountedPrice = product.price * (1 - discountPercentage / 100);
    return { ...product, price: discountedPrice };
});
}

function calculateTotalPrice(products) {
return products.reduce((total, product) => total + product.price, 0);
}

// TESTING //

const products = [
{ name: "Product 1", price: 100 },
{ name: "Product 2", price: 50 },
{ name: "Product 3", price: 200 }
];

console.log("New array of products with discounted prices based on the given percentage:")
const discountedProducts = calculateDiscountedPrice(products, 10);
console.log(discountedProducts);

console.log("Total price of all products")
const totalPrice = calculateTotalPrice(products);
console.log(totalPrice);

console.log("The original array or its items without modifying:")
console.log([products])