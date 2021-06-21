import { useSelector, useDispatch } from "react-redux";
import getCurrentCategoryThunk from '../../../Redux/ReduxThunks/getCurrentCategory';
import styles from './Navbar.module.css'

const Navbar = ({ category }) => {

  const dispatch = useDispatch();
  const currentCategory = useSelector(state => state.currentCategory);

  return (
    <div
      className={category === currentCategory ? styles.navbarCurrentItem : styles.navbarItem}
      onClick={() => dispatch(getCurrentCategoryThunk(category))}
    > {category}</div >
  );
};

export default Navbar;