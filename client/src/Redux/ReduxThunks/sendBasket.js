const sendBasket = () => {
  return {
    type: 'SEND_BASKET',
  };
};

const sendBasketThunk = (basket) => async (dispatch) => {
  try {
    console.log('Тут лоадер должен выключаться!');
    const response = await fetch('http://localhost:3001/basket/sendbasket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ basketList: basket })
    });
    if (response.status === 200) {
      dispatch(sendBasket());
    }
  }
  catch (e) {
    console.log(e)
  }
  finally {
    console.log('Тут лоадер должен выключаться!');
  };
};

export default sendBasketThunk;
