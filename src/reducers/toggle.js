const lightTheme = 'bg-gray-200 text-gray-800';
const darkTheme = 'bg-gray-800 text-yellow-400';

const toggleReducer = (
  state = lightTheme,
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
