import DeliveryAdress from "./DeliveryAdress/DeliveryAdress";
import TakeAwayAdress from "./TakeAwayAdress/TakeAwayAdress";
import styles from './DeliveryMethod.module.css';
import { useSelector, useDispatch } from "react-redux";

const DeliveryMethod = () => {

  const dispatch = useDispatch();
  const method = useSelector(state => state.delivery);

  return (
    <div className={styles.chosenMethod}>
      {method
        ?
        <DeliveryAdress />
        :
        <TakeAwayAdress />
      }
      <div className={styles.chooseShell}>
        <div className={method ? styles.chosen : styles.unchosen} onClick={() => dispatch({type: 'CHANGE_DELIVERY'})}><p>Доставка</p></div>
        <div className={method === false ? styles.chosen : styles.unchosen} onClick={() => dispatch({type: 'CHANGE_DELIVERY'})}><p>Самовывоз</p></div>
      </div>
    </div>
  );
};

export default DeliveryMethod;