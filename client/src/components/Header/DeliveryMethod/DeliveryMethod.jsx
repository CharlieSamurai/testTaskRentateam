import DeliveryAdress from "./DeliveryAdress/DeliveryAdress";
import TakeAwayAdress from "./TakeAwayAdress/TakeAwayAdress";
import styles from './DeliveryMethod.module.css';
import { useSelector, useDispatch } from "react-redux";

const DeliveryMethod = () => {

  const dispatch = useDispatch();
  const method = useSelector(state => state.delivery);

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      {method
        ?
        <DeliveryAdress />
        :
        <TakeAwayAdress />
      }
      <div style={{ display: 'flex', width: '50%', alignItems: 'center' }}>
        <div className={method ? styles.choosen : styles.unchoosen} onClick={() => dispatch({type: 'CHANGE_DELIVERY'})}><p>Доставка</p></div>
        <div className={method === false ? styles.choosen : styles.unchoosen} onClick={() => dispatch({type: 'CHANGE_DELIVERY'})}><p>Самовывоз</p></div>
      </div>
    </div>
  );
};

export default DeliveryMethod;