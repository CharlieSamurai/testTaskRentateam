import Navbar from './Navbar/Navbar';
import Bakset from './Basket/Basket';
import { useSelector } from 'react-redux';
import DeliveryMethod from './DeliveryMethod/DeliveryMethod';
import styles from './Header.module.css';


const Header = () => {

  const assortiment = useSelector(state => state.categories);

  return (
    <div className={styles.divHeader}>
      <Bakset />
      <DeliveryMethod />
      <div className={styles.navbarShell}>
        {assortiment.map((el, i) => <Navbar key={el + i} category={el} />)}
      </div>
    </div>
  );
};

export default Header;