import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Item.module.css';

const Item = ({ props }) => {

  const dispatch = useDispatch();
  const currentBasket = useSelector(state => state.currentBasket);
  let currentCount = (currentBasket.filter(el => el.name === props.name).length);

  const [count, setCount] = useState(currentCount);

  const addHandler = () => {
    setCount(prev => prev += 1);
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        item: {
          name: props.name,
          price: props.price
        }
      }
    });
  };

  const removeHandler = () => {
    setCount(prev => prev -= 1);
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: {
        name: props.name,
        price: props.price
      }
    });
  };

  return (
    <div className={styles.item}>
      <img src={props.img} alt="" className={styles.img} />
      <p>{props.name}</p>
      <p>Цена: {props.price}р</p>
      {
        count
          ?
          <div className={styles.counterShell}>
            <button className={styles.countitemsLeft} onClick={removeHandler}>-</button>
            {currentCount}
            <button className={styles.countitemsRight} onClick={addHandler}>+</button>
          </div>
          :
          <button className={styles.addItem} onClick={addHandler} >Add</button>
      }
    </div>
  );
};

export default Item;