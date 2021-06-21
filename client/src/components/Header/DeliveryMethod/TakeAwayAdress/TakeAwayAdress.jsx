import { useState } from "react";
import styles from '../DeliveryMethod.module.css';


const TakeAwayAdress = () => {

  const [selectAdress, setSelectAdress] = useState(null);

  return (
    <div className={styles.divDelivery}>
      <h1>Самовывоз</h1><br/>
      <select onChange={(e) => setSelectAdress(e.target.value)}>
        <option>Какой-нибудь адрес</option>
        <option>Еще какой-нибудь адрес</option>
        <option>И еще какой-нибудь адрес</option>
        <option>Ну всё, точно последний</option>
      </select>
    </div>
  );
};

export default TakeAwayAdress;