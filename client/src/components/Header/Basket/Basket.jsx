import { useSelector, useDispatch } from "react-redux";
import styles from './Basket.module.css';
import sendBasketThunk from '../../../Redux/ReduxThunks/sendBasket';

const Basket = () => {

  const dispatch = useDispatch();
  const currentSum = useSelector(state => state.currentSum);
  const currentBasket = useSelector(state => state.currentBasket);

  const sendBasketHandler = () => {
    dispatch(sendBasketThunk(currentBasket));
  };

  return (
    <div style={{ height: '88px' }} onClick={sendBasketHandler}>
      <img src="./images/red-squares.png" alt="" />
      <div className={styles.basket} style={{ backgroundImage: 'url(./images/basket.png)' }}>
        <div style={{position: 'absolute', top: '6px', left: '5px'}}>{`${currentSum}р`}</div>
      </div>
    </div>
  );
};

export default Basket;