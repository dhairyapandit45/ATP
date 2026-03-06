import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// Validate payment method (card/upi/cod)
function validatePaymentMethod(method) {
  return method === 'card' || method === 'upi' || method === 'cod';
}

// Generate random order ID
function generateOrderId() {
  return 'ORD' + Date.now();
}

// Process payment and complete order
function processPayment(paymentMethod, couponCode = null) {
  // Get cart items and total
  const items = getCartItems();
  const subtotal = getCartTotal();
  
  // Validate payment method
  if (!validatePaymentMethod(paymentMethod)) {
    return {
      orderId: null,
      items: [],
      subtotal: 0,
      discount: 0,
      total: 0,
      paymentMethod: paymentMethod,
      status: 'failed',
      message: 'Invalid payment method. Use: card, upi, or cod'
    };
  }
  
  // Check if cart is empty
  if (items.length === 0) {
    return {
      orderId: null,
      items: [],
      subtotal: 0,
      discount: 0,
      total: 0,
      paymentMethod: paymentMethod,
      status: 'failed',
      message: 'Cart is empty'
    };
  }
  
  // Apply discount if coupon provided
  let discount = 0;
  let finalTotal = subtotal;
  
  if (couponCode) {
    const discountResult = applyDiscount(subtotal, couponCode, items);
    if (discountResult.message === `Discount of ${discountResult.discount} applied successfully`) {
      discount = discountResult.discount;
      finalTotal = discountResult.finalTotal;
    }
  }
  
  // Process payment (simulate)
  // Reduce stock for all items
  items.forEach((item) => {
    reduceStock(item.productId, item.quantity);
  });
  
  // Generate order ID
  const orderId = generateOrderId();
  
  // Clear cart
  clearCart();
  
  // Generate order summary
  return {
    orderId: orderId,
    items: items,
    subtotal: subtotal,
    discount: discount,
    total: finalTotal,
    paymentMethod: paymentMethod,
    status: 'success',
    message: `Payment successful. Order ID: ${orderId}`
  };
}

export { processPayment, validatePaymentMethod }
