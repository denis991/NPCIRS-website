import initState from '../initState';
import { GET_TERRITORY, PATCH_TERRITORY } from '../types/territoryTypes';

export default (state = initState.territory, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TERRITORY:
      return payload;
    default:
      return state;
  }
};
