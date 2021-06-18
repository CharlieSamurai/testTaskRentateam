const getCurrentCategory = (categoryObj) => {
  return {
    type: 'CURRENT_CATEGORY',
    payload: categoryObj
  };
};

const getCurrentCategoryThunk = (categoryName) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/getcurrentcategory/${categoryName}`);
  const serverResponse = await response.json();
  dispatch(getCurrentCategory(serverResponse));
};

export default getCurrentCategoryThunk;
