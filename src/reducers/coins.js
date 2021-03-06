const coinReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_COINS':
      return action.payload;
    case 'GET_COINS_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default coinReducer;
