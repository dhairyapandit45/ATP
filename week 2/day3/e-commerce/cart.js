import { getProductById, checkStock } from './product.js';

let cartItems = [];

// Add product to cart with quantity
function addToCart(productId, quantity) {
  const product = getProductById(productId);
  
  // Check if product exists
  if (!product) {
    return { success: false, message: 'Product not found' };
  }
  
  // Check stock availability
  if (!checkStock(productId, quantity)) {
    return { success: false, message: `Insufficient stock. Available: ${product.stock}` };
  }
  
  // Check if product already in cart
  const existingItem = cartItems.find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
    return { success: true, message: `${product.name} quantity updated to ${existingItem.quantity}` };
  }
  
  // Add new item to cart
  cartItems.push({
    productId: productId,
    name: product.name,
    price: product.price,
    quantity: quantity,
    category: product.category
  });
  
  return { success: true, message: `${product.name} added to cart` };
}

// Remove product from cart
function removeFromCart(productId) {
  const index = cartItems.findIndex((item) => item.productId === productId);
  if (index !== -1) {
    const removedItem = cartItems[index];
    cartItems.splice(index, 1);
    return { success: true, message: `${removedItem.name} removed from cart` };
  }
  return { success: false, message: 'Product not found in cart' };
}

// Update quantity of product in cart
function updateQuantity(productId, newQuantity) {
  const item = cartItems.find((item) => item.productId === productId);
  if (!item) {
    return { success: false, message: 'Product not found in cart' };
  }
  
  // Check stock availability
  if (!checkStock(productId, newQuantity)) {
    return { success: false, message: `Insufficient stock for quantity ${newQuantity}` };
  }
  
  if (newQuantity <= 0) {
    return removeFromCart(productId);
  }
  
  item.quantity = newQuantity;
  return { success: true, message: `${item.name} quantity updated to ${newQuantity}` };
}

// Return all cart items
function getCartItems() {
  return cartItems;
}

// Calculate total price of all items in cart
function getCartTotal() {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
}

// Empty the cart
function clearCart() {
  cartItems = [];
  return { success: true, message: 'Cart cleared' };
}

export { addToCart, removeFromCart, updateQuantity, getCartItems, getCartTotal, clearCart }
