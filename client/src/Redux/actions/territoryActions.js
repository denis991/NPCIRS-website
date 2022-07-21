import { GET_TERRITORY, PATCH_TERRITORY } from '../types/territoryTypes';

export const getTerritory = (territory) => ({ type: GET_TERRITORY, payload: territory });
export const patchTerritory = (territory) => ({ type: PATCH_TERRITORY, payload: territory });

export const getTerritoryThunk = () => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/territory`);
    if (response.ok) {
      const result = await response.json();
      dispatch(getTerritory(result));
    }
  } catch (e) {
    console.log(e);
  }
};
