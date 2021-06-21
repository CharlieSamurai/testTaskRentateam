import { useState } from "react";
import styles from '../DeliveryMethod.module.css';

const DeliveryAdress = () => {

  const [streetInput, setStreetInput] = useState('');
  const [homeNumberInput, setHomeNumberInput] = useState('');

  return (
    <div className={styles.divDelivery}>
    <h1>Доставка г. Москва</h1><br/>
    <input placeholder='Введите улицу' value={streetInput} onChange={(e) => {setStreetInput(e.target.value)}} /><br/>
    <input placeholder='Введите номер дома' value={homeNumberInput} onChange={(e) => {setHomeNumberInput(e.target.value)}} />
    </div>
  );
};

export default DeliveryAdress;