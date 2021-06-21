import Item from './Item/Item';
import { useSelector } from "react-redux";
import styles from './Main.module.css';

const Main = () => {

  const currentItems = useSelector(state => state.currentCategoryItems);
  const delivery = useSelector(state => state.delivery);

  return (
    <div className={styles.divMain}>
      {
        delivery
          ?
          currentItems?.map(el => {
            if (el.delivery) { return <Item key={el.id} props={el} /> }
          })
          :
          currentItems?.map(el => <Item key={el.id} props={el} />)
      }
    </div>
  );
};

export default Main;
