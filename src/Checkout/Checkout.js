import React from "react";
import CartItems from "./CartItems";
import PricingDetails from "./PricingDetails";
import ApplyDiscount from "./ApplyDiscount";
import CheckoutButton from "./CheckoutButton";

const Checkout: React.FC = () => {
  // Define cartItems, total, and discount here or fetch them as needed
  const cartItems = []; // Example: an array of cart items
  const total = 100; // Example: total price
  const discount = 10; // Example: discount amount

  return (
    <div className="checkout">
      <CartItems items={cartItems} />
      <PricingDetails total={total} discount={discount} />
      <ApplyDiscount />
      <CheckoutButton />
    </div>
  );
};

export default Checkout;
