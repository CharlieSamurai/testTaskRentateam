const getAllCategories = (categoriesArr) => {
  return {
    type: 'GET_CATEGORIES',
    payload: categoriesArr
  };
};

const getAllCategoriesThunk = () => async(dispatch) => {
  const response = await fetch('http://localhost:3001/getallcategories');
  const serverResponse = await response.json();
  dispatch(getAllCategories(serverResponse));
};

export default getAllCategoriesThunk;
