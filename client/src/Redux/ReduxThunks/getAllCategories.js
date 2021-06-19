const getAllCategories = (categoriesArr) => {
  return {
    type: 'GET_CATEGORIES',
    payload: categoriesArr
  };
};

const getAllCategoriesThunk = () => async(dispatch) => {
  const response = await fetch('http://localhost:3001/getallcategories');
  if (response.status === 200) {
    dispatch(getAllCategories(await response.json()));
  };
};

export default getAllCategoriesThunk;
