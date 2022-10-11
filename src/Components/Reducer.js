export const initialState = {
  basket: [],
  user:null
};

/*export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);*/

export const getBasketTotal = (basket) => {
  var amount = 0;
  if (basket.length < 1) {
    return 0;
  }
  for (var i = 0; i < basket.length; i++) {
    amount += basket[i].price;
  }
  return amount;
};

function Reducer(state, action) {
  switch (action.type) {
    case "Add_to_basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      case "remove":
      const index=state.basket.findIndex((item)=>item.id===action.id);
      let newBasket=[...state.basket];
      if(index>=0){
        newBasket.splice(index,1);
      }
      return {
        ...state,
        basket:newBasket
      };

      case "SET_USER":
        return {
          ...state,
          basket:[],
          user:action.user
        }
    default:
      return state;
  }
}

export default Reducer;
