import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import WALLET_DETAILS from './actions/types';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
     payload: { prop, value }
  };
};

