import { useState } from "react";

const TakeAwayAdress = () => {

  const [selectAdress, setSelectAdress] = useState(null);

  return (
    <div style={{width: '100%', height: '200px', marginLeft: '100px'}}>
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