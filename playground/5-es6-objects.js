const name = "Sanjana";
const userAge = "21";

const user = {
    name,
    age: userAge,
    location: "India",
};

console.log(user);

const products = {
    type: "Single-lined",
    pages: 100,
    stock: 500,
    price: 30,
    salePrice: undefined,
};

// const { type: productType, stock } = products;
// console.log(productType);
// console.log(stock);

const transaction = (productMaterial, { type, stock = 0 } = {}) => {
    console.log(productMaterial, type, stock);
};
transaction("Smooth", products);
