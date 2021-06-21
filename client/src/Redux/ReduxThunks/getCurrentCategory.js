const getCurrentCategory = (categoryObj) => {
  return {
    type: 'CURRENT_CATEGORY',
    payload: categoryObj
  };
};

const getCurrentCategoryThunk = (categoryName) => async (dispatch) => {
  try {
    console.log('Тут лоадер должен выключаться!');
    const response = await fetch(`http://localhost:3001/category/getcurrentcategory/${categoryName}`);
    if (response.status === 200) {
      dispatch(getCurrentCategory(await response.json()));
    };
  }
  catch (e) {
    console.log(e);
  }
  finally {
    console.log('Тут лоадер должен выключаться!');
  };
};

export default getCurrentCategoryThunk;
