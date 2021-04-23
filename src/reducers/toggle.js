const lightTheme = 'light';
const darkTheme = 'dark';

const toggleReducer = (
  state = darkTheme,
  action,
) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      if (state === lightTheme) {
        return darkTheme;
      } if (state === darkTheme) {
        return lightTheme;
      }
      break;
    default:
      return state;
  }
  return state;
};

export default toggleReducer;
