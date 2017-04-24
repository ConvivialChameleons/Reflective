export const USER_SUBMIT_EMAIL = 'USER_SUBMIT_EMAIL';
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';

const requestUserInfo = () => (
  {
    type: REQUEST_USER_INFO,
    isFetching: true
  }
);

const receiveUserInfo = userInfo => (
  {
    type: RECEIVE_USER_INFO,
    id: userInfo.user_id,
    firstName: userInfo.first_name,
    lastName: userInfo.last_name,
    phone: userInfo.phone,
    isFetching: false
  }
);

export const fetchUserInfo = (token) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  };

  return (dispatch) => {
    dispatch(requestUserInfo());
    return fetch('/api/auth/me', config)
      .then(response => response.json())
      .then((responseJSON) => {
        dispatch(receiveUserInfo(responseJSON.user));
      })
      .catch(error => console.error(error));
  };
};

export const userSubmitEmail = email => (
  {
    type: USER_SUBMIT_EMAIL,
    email
  }
);
