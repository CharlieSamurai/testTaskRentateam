import Navbar from './Navbar/Navbar';
import Bakset from './Basket/Basket';
import { useSelector } from 'react-redux';
import DeliveryMethod from './DeliveryMethod/DeliveryMethod';


const Header = () => {

  const assortiment = useSelector(state => state.categories);

  return (
    <div style={{
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'sticky',
      top: '0px',
      zIndex: 300000
    }}>
      <Bakset />
      <DeliveryMethod />
      <div style={{
        display: 'flex',
        height: '64px',
        justifyContent: 'center',
        alignItems: 'center'
      }}>{assortiment.map((el, i) => <Navbar key={el + i} category={el} />)}</div>
    </div>
  );
};

export default Header;