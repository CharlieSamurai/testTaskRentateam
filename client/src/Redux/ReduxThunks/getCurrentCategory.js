const getCurrentCategory = (categoryObj) => {
  return {
    type: 'CURRENT_CATEGORY',
    payload: categoryObj
  };
};

const getCurrentCategoryThunk = (categoryName) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/getcurrentcategory/${categoryName}`);
    if (response.status === 200) {
      dispatch(getCurrentCategory(await response.json()));
    };
  }
  catch (e) {
    console.log(e);
  }
  finally {
    console.log('make a loader');
  };
};

export default getCurrentCategoryThunk;
