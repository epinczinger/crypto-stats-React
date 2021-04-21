import axios from 'axios';

export const getCoinData = () => (dispatch) => {
  axios({
    method: 'get',
    url: 'api.coincap.io/v2/assets',
    headers: {
      Accept: 'application/json',
      Accept_Encoding: 'gzip',
      mode: 'cors',
    },
  })
    .then((response) => {
      console.log(response);
      dispatch({
        type: 'GET_COINS',
        payload: response,
      });
    })
    .catch((error) => dispatch({
      type: 'GET_COINS_ERROR',
      payload: error,
    }));
};

export const toggleTheme = () => (dispatch) => {
  dispatch({
    type: 'TOGGLE_THEME',
  });
};
