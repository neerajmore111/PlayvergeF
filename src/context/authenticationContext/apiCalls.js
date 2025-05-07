import axios from "axios";
import { loginStart, loginSuccess } from "./AuthenticationAction";
import notifyError from "../../components/notify/notifyError";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("https://playvergrserver2-1.onrender.com/api/user/login/", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(notifyError("The email address or password is incorrect."));
  }
};
