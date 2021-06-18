const rootReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      };

    case 'CURRENT_CATEGORY':
      return {
        ...state,
        currentCategory: action.payload.category,
        currentCategoryItems: action.payload.itemList
      }

    case 'ADD_TO_BASKET':
      return {
        ...state,
        currentBasket: [...state.currentBasket, action.payload.item],
        currentSum: state.currentSum += Number(action.payload.item.price)
      }

    case 'REMOVE_FROM_BASKET':
      state.currentBasket.splice((state.currentBasket.findIndex(el => el.name === action.payload.name)), 1);
          return {
        ...state,
        currentSum: state.currentSum -= Number(action.payload.price)
      }

      case 'SEND_BASKET':
        return {
          ...state,
          currentBasket: [],
          currentSum: 0
        }

    case 'CHANGE_DELIVERY':
      return {
        ...state,
        delivery: !state.delivery
      }

    default:
      return state;
  };
};

export default rootReducer;