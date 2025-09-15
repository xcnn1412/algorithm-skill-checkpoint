function findProductPrice(products, name){
  let low = 0;
  let high = products.length - 1;

  while ( low <= high){
    let mid = Math.floor((low + high) / 2);
    let midProduct = products[mid];

    if ( midProduct.name === name ){

      return midProduct.price;

    } else if ( midProduct.name > name ){
      hight = mid - 1;
    } else{
      low = mid + 1;
    }
  }
  return -1;

  }
// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
