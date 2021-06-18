import getAllCategoriesThunk from './Redux/ReduxThunks/getAllCategories';
import getCurrentCategoryThunk from './Redux/ReduxThunks/getCurrentCategory';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  const dispatch = useDispatch();
  dispatch(getAllCategoriesThunk());
  dispatch(getCurrentCategoryThunk('Бургеры'));

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
