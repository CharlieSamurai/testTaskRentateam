import Item from './Item/Item';
import { useSelector } from "react-redux";

const Main = () => {

  const currentItems = useSelector(state => state.currentCategoryItems);
  const delivery = useSelector(state => state.delivery);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-evenly' }}>
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
