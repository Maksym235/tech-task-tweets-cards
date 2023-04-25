import axios from "axios";

axios.defaults.baseURL = "https://6441908ffadc69b8e0873831.mockapi.io/";

export function GetApi(page) {
  axios.defaults.params = {
    limit: 5,
    page,
  };
  const resp = axios.get("users");
  return resp;
}
