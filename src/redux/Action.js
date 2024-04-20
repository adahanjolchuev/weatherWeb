const initialState = {
  value: 'ru',
  theme: JSON.parse(localStorage.getItem('darkMode')) || true,
};

const Action = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return { ...state, value: action.payload };
    case "THEME":
      return { ...state, theme: state.theme ? false : true };
    default:
      return state;
  }
};
export default Action;
