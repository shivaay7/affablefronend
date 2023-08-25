import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

//state banake jab dispatch karenge to wahan pe action define krna padega or uske andar jo bhi state hoga usey apne aap change kr dega
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];

    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    case "UPDATE":
      let arr = [...state];
      arr.find((food, index) => {
        if (food.id === action.id) {
          //   console.log(
          //     food.qty,
          //     parseInt(action.qty),
          //     (action.price = food.price)
          //   );
          arr[index] = {
            ...food,
            qty: parseInt(action.qty) + food.qty,
            price: action.price + food.price,
          };
        }
        return arr;
      });
      return arr;
    case "DROP":
      let emptyArr = [];
      return emptyArr;
    default:
      console.log("Error in Reducer !");
  }
};

export const CartProvider = ({ children }) => {
  // items ka state define krke use send krna(dispatch)
  //array shuru me empty rahegi coz initially add to cart empty rahega or fir value hum add krte jayenge

  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);

export const useDispatchCart = () => useContext(CartDispatchContext);
