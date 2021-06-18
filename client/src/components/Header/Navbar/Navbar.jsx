import { useSelector, useDispatch } from "react-redux";
import getCurrentCategoryThunk from '../../../Redux/ReduxThunks/getCurrentCategory';

const Navbar = ({ category }) => {

  const dispatch = useDispatch();
  const currentCategory = useSelector(state => state.currentCategory);

  return (
    <div style={{
      width: '100px',
      height: '32px',
      color: (currentCategory === category ? 'black' : '#9D9D9D'),
      fontFamily: 'cursive'
    }}
    onClick={() => dispatch(getCurrentCategoryThunk(category))}
    > {category}</div >
  );
};

export default Navbar;