// Available coupons
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// Validate coupon code and conditions
function validateCoupon(couponCode, cartTotal, cartItems) {
  // Check if coupon exists
  if (!coupons[couponCode]) {
    return { valid: false, message: 'Invalid coupon code' };
  }
  
  const coupon = coupons[couponCode];
  
  // Check minimum amount requirement
  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: `Minimum purchase amount required: ${coupon.minAmount}` };
  }
  
  // Check category requirement (if any)
  if (coupon.category) {
    const hasCategoryItem = cartItems.some((item) => item.category === coupon.category);
    if (!hasCategoryItem) {
      return { valid: false, message: `Coupon valid only for ${coupon.category} items` };
    }
  }
  
  return { valid: true, message: 'Coupon is valid' };
}

// Calculate discount amount based on coupon type
function calculateDiscount(couponCode, cartTotal) {
  const coupon = coupons[couponCode];
  if (!coupon) return 0;
  
  if (coupon.type === 'percentage') {
    return Math.floor(cartTotal * (coupon.value / 100));
  } else if (coupon.type === 'flat') {
    return coupon.value;
  }
  return 0;
}

// Apply discount with validation
function applyDiscount(cartTotal, couponCode, cartItems) {
  // Validate coupon
  const validation = validateCoupon(couponCode, cartTotal, cartItems);
  
  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }
  
  // Calculate discount
  const discount = calculateDiscount(couponCode, cartTotal);
  const finalTotal = cartTotal - discount;
  
  return {
    originalTotal: cartTotal,
    discount: discount,
    finalTotal: finalTotal,
    message: `Discount of ${discount} applied successfully`
  };
}

export { validateCoupon, calculateDiscount, applyDiscount }
