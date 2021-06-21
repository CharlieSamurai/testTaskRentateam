const getAllCategories = (categoriesArr) => {
  return {
    type: 'GET_CATEGORIES',
    payload: categoriesArr
  };
};

const getAllCategoriesThunk = () => async (dispatch) => {
  try {
    console.log('Тут лоадер должен включаться!');
    const response = await fetch('http://localhost:3001/category/getallcategories');
    if (response.status === 200) {
      dispatch(getAllCategories(await response.json()));
    };
  }
  catch (e) {
    console.log(e);
  }
  finally {
    console.log('Тут лоадер должен выключаться!');
  };
};

export default getAllCategoriesThunk;
