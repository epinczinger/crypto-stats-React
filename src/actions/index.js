import axios from 'axios';

const API_KEY = 'coinrankinge61e17811f108b21fb2a25fab66481336fe4e17c817aa19d';
const API_URL = 'https://api.coinranking.com/v2';

export const getCoinData = () => (dispatch) => {
  axios({
    method: 'get',
    url: `${API_URL}/coin/Qwsogvtv82FCd`,
    headers: {
      Accept: 'application/json',
      Authorization: API_KEY,
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
