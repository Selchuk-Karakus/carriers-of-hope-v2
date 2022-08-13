export const handleRemoveItemInCart = (idx, cart, setCart) => {
  const result = cart.filter((item, index) => index !== idx);
  setCart(result);
};
