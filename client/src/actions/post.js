import { FETCH_ONE } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_ONE, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
