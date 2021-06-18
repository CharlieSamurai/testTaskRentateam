const sendBasket = () => {
  return {
    type: 'SEND_BASKET',
  };
};

const sendBasketThunk = (basket) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/sendbasket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ basketList: basket })
  });
  if (response.status === 200) {
    dispatch(sendBasket());
  }
};

export default sendBasketThunk;
