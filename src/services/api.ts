import axios, { Method, AxiosRequestConfig } from "axios";
import { API_URL } from "../configs/apis";
// import { configureStore } from "store";
// import { CREATE_TOAST } from "store/actionTypes";
import { ObjectType } from "types";
import { SUCCESS } from "configs/constants";

axios.defaults.baseURL = API_URL;

type CallbackType = (data: { code: number; id: string; status: boolean; text: string; data: any; error?: any }) => void;

/**
 * Config request common
 *
 * @param {String} method Request method
 * @param {String} url Request URL
 * @param {Object} data Request params
 * @param {Object} options Config options
 */
const request = async (
  method: Method,
  url: string,
  data: any = {},
  callback: CallbackType = () => {},
  options: ObjectType = {}
) => {
  // config params
  // const accessToken = configureStore.getState().auth.access_token;
  // const headers = { Authorization: `Bearer ${accessToken}` };
  const headers = {};

  const { showToast, ...optionsRest } = options;

  const defaultParams = { headers, method, url, ...optionsRest };
  const paramConfigs: AxiosRequestConfig =
    method === "get" ? { ...defaultParams, params: data } : { ...defaultParams, data: data };

  return new Promise<any>((resolve) => {
    axios(paramConfigs).then((res) => {
      let { data = {} as any } = res;
      const { code = 500, message = "", id = "", status = false } = data;
      data = {
        code,
        id,
        status: status === SUCCESS,
        text: message,
        data: data.data,
      };
      // showToast &&
      //   configureStore.dispatch({
      //     type: CREATE_TOAST,
      //     payload: { type: status, message: { content: message } },
      //   });

      resolve(data);
      callback(data);
    });
  });
};

/**
 * Request process callback with method GET
 *
 * @param {String} url Request URL
 * @param {Object} params Request params
 * @param {Function} callback callback
 */
const apiGet = (url = "", params = {}, callback?: CallbackType, showToast?: boolean) => {
  return request("get", url, params, callback, { showToast });
};

/**
 * Request process callback with method POST
 *
 * @param {String} url Request URL
 * @param {Object} params Request params
 * @param {Function} callback callback
 */
const apiPost = (url = "", params = {}, callback?: CallbackType, showToast?: boolean) => {
  return request("post", url, params, callback, { showToast });
};

/**
 * Request process callback with method PUT
 *
 * @param {String} url Request URL
 * @param {Object} params Request params
 * @param {Function} callback callback
 */
const apiPut = (url = "", params = {}, callback?: CallbackType, showToast?: boolean) => {
  return request("put", url, params, callback, { showToast });
};

/**
 * Request process callback with method DELETE
 *
 * @param {String} url Request URL
 * @param {Object} params Request params
 * @param {Function} callback callback
 */
const apiDelete = (url = "", params = {}, callback?: CallbackType, showToast?: boolean) => {
  return request("delete", url, params, callback, { showToast });
};

export const useApis = () => ({
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
  request,
});

export default { get: apiGet, post: apiPost, put: apiPut, delete: apiDelete, request };
