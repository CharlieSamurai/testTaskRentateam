const getAllCategories = (categoriesArr) => {
  return {
    type: 'GET_CATEGORIES',
    payload: categoriesArr
  };
};

const getAllCategoriesThunk = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/category/getallcategories');
    if (response.status === 200) {
      dispatch(getAllCategories(await response.json()));
    };
  }
  catch (e) {
    console.log(e);
  }
  finally {
    console.log('make a loader');
  };
};

export default getAllCategoriesThunk;
