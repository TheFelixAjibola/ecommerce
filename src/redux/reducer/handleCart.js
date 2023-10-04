const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if product already exists in the cart
      const existingItem = state.find((item) => item.id === product.id);
      if (existingItem) {
        // Increase the quantity
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Add the product to the cart with quantity 1
        return [...state, { ...product, qty: 1 }];
      }
    case "DELITEM":
      // Decrease the quantity or remove the item if qty reaches 0
      return state.map((item) =>
        item.id === product.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    default:
      return state;
  }
};

export default handleCart;
