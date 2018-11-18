import axios from "axios";
import { Dispatch } from "redux";

const FETCH_USER = "FETCH_USER";
export const fetchUserRequest = () => {
  return (dispatch: Dispatch) => {
    axios
      .get("api/users")
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
