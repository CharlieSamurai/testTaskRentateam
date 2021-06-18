import { useSelector } from "react-redux";
import styles from './Basket.module.css';

const Basket = () => {

  const currentSum = useSelector(state => state.currentSum);

  return (
    <div style={{ height: '88px' }}>
      <img src="./images/red-squares.png" alt="" />
      <div className={styles.basket} style={{ backgroundImage: 'url(./images/basket.png)' }}>
        <div style={{position: 'absolute', top: '6px', left: '5px'}}>{`${currentSum}р`}</div>
      </div>
    </div>
  );
};

export default Basket;