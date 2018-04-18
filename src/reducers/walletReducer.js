import WALLET_DETAILS from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password:'',
  user: null,
  error: '',
  loading: false

};


export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type){
    case WALLET_DETAILS:
    return { ...state, wallet: action.payload };

    default:
    return state;
  }
};