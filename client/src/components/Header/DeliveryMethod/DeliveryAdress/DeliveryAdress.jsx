import { useState } from "react";

const DeliveryAdress = () => {

  const [streetInput, setStreetInput] = useState('');
  const [homeNumberInput, setHomeNumberInput] = useState('');

  return (
    <div style={{width: '100%', height: '200px', marginLeft: '100px'}}>
    <h1>Доставка г. Москва</h1><br/>
    <input placeholder='Введите улицу' value={streetInput} onChange={(e) => {setStreetInput(e.target.value)}} /><br/>
    <input placeholder='Введите номер дома' value={homeNumberInput} onChange={(e) => {setHomeNumberInput(e.target.value)}} />
    </div>
  );
};

export default DeliveryAdress;