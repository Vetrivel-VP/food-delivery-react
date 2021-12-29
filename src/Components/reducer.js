export const initialState = {
  cart: null,
};

export const actionType = {
  SET_CART: "SET_CART",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_CART:
      return {
        ...state,
        cart: action.cart,
      };

    default:
      return state;
  }
};

export default reducer;
