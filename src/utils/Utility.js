export async function fetchProducts(category = null) {
    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : 'https://fakestoreapi.com/products';
    const response = await fetch(url);
    const products = await response.json();
    return products;
  }