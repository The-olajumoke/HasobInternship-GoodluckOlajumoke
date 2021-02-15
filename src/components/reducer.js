export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      console.log(action.item);
      console.log(state.basket);
      //    state.basket
      const product = state.basket.find((item) => item.id == action.item.id);
      if (product) {
        return state;
      } else {
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      }

      break;
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket

      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product (id:${action.id})`);
      }
      return { ...state, basket: newBasket };
      break;
    case "SET_QUANTITY": {
      const product = state.basket.find(
        (item) => item.id === action.payload.id
      );
      const newBasket = state.basket.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        basket: [...newBasket],
      };
    }
    default:
      return state;
  }
}
export default reducer;