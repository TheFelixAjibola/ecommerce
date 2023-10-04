// const cart = [];

// const handleCart = (state = cart, action) => {
//   const product = action.payload;
//   switch (action.type) {
//     case "ADDITEM":
//       //Check if product already existing
//       const exist = state.find((x) => x.id === product.id);
//       if (exist) {
//         //increase the quantity
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//         );
//       } else {
//         const product = action.payload;
//         return [
//           ...state,
//           {
//             ...product,
//             qty: 1,
//           },
//         ];
//       }
//       break;
//     case "DELITEM":
//       const exist1 = state.find((x) => x.id === product.id);
//       if (exist1.qty === 1) {
//         return state.filter((x) => x.id !== exist1.id);
//       } else {
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//         );
//       }
//       break;
//     default:
//       return state;
//       break;
//   }
// };

// export default handleCart;

const cart = [];

// const handleCart = (state = cart, action) => {
//   const product = action.payload;
//   switch (action.type) {
//     case "ADDITEM":
//       // Check if product already exists
//       const exist = state.find((x) => x.id === product.id);
//       if (exist) {
//         // Increase the quantity
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//         );
//       } else {
//         // Rename the variable to avoid conflicts
//         const newProduct = action.payload;
//         return [
//           ...state,
//           {
//             ...newProduct,
//             qty: 1,
//           },
//         ];
//       }
//     case "DELITEM":
//       const exist1 = state.find((x) => x.id === product.id);
//       if (exist1.qty === 1) {
//         return state.filter((x) => x.id !== exist1.id);
//       } else {
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//         );
//       }
//     default:
//       return state;
//   }
// };

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
