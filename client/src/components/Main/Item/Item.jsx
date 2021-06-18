import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Item.module.css';

const Item = ({props}) => {

  console.log(props)

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
    <img src={props.img} alt="" style={{ width: '350px', height: '280px' }} />
    <p>{props.name}</p>
    <p>Цена: {props.price}р</p>
    {
      count
      ?
      <div style={{position: 'absolute', bottom: '0px', right: '0px', width: '100px'}}>
      <button style={{width: '30px', marginRight: '5px'}} onClick={removeHandler}>-</button>{currentCount}<button style={{width: '30px', marginLeft: '5px'}} onClick={addHandler}>+</button>
      </div>
      :
      <button style={{position: 'absolute', bottom: '0px', right: '0px', width: '40px'}} onClick={addHandler} >Add</button>
    }
  </div>
  );
};

export default Item;