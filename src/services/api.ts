import axios, { Method, AxiosRequestConfig } from "axios";
import { API_URL } from "../configs/apis";
import { isArray } from "lodash";
import { createToast } from "components/toast/createToast";

axios.defaults.baseURL = API_URL;

type CallbackType = (data: { status: boolean; text: string; data: any }) => void;

type OptionsType = {
  hideToast?: boolean;
  successMessage?: string;
  [key: string]: any;
};

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
  options: OptionsType = {}
) => {
  // config params
  const accessToken =
    "f0526a9f9b3576b7da0c17ec3890753984585890cef058e12dfb61ddd5bc5c704935328b0ec7da58d8092b889034eb7fc4c91d0c11638c281c604949ac556fcbb81c42b537707f8c5afc31164dee11954d484b583b1f17fa84d0a9adbcede3ec1372e48d3b3cd136931767e6784362c45ed1159912417bcb18d6bee97a2048c0";
  const headers = { Authorization: `bearer ${accessToken}` };

  const { hideToast, successMessage, ...optionsRest } = options;

  const defaultParams = { headers, method, url, ...optionsRest };
  const paramConfigs: AxiosRequestConfig = { ...defaultParams, params: data };

  if (method !== "get" && method !== "delete") {
    delete paramConfigs.params;
    const formData = new FormData();
    for (const key in data) {
      const value = data[key];
      if (isArray(value)) {
        value.forEach((i) => formData.append(key, i));
      } else formData.append(key, value);
    }

    paramConfigs.data = formData;
  }

  return new Promise<any>((resolve) => {
    axios(paramConfigs).then((res) => {
      let { data = {} as any } = res;
      const error = data.error;
      const message = (error || {}).message;
      data = {
        status: !error,
        text: message || !error ? successMessage || "Thành công!" : "Có lỗi xảy ra, vui lòng thử lại sau!",
        data: data,
      };
      if (!hideToast) createToast({ type: data.status, message: { content: data.text } });
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
const apiGet = (url = "", params = {}, callback?: CallbackType, options?: OptionsType) => {
  return request("get", url, params, callback, options);
};

/**
 * Request process callback with method POST
 *
 * @param {String} url Request URL
 * @param {Object} params Request params
 * @param {Function} callback callback
 */
const apiPost = (url = "", params = {}, callback?: CallbackType, options?: OptionsType) => {
  return request("post", url, params, callback, options);
};

/**
 * Request process callback with method PUT
 *
 * @param {String} url Request URL
 * @param {Object} params Request params
 * @param {Function} callback callback
 */
const apiPut = (url = "", params = {}, callback?: CallbackType, options?: OptionsType) => {
  return request("put", url, params, callback, options);
};

/**
 * Request process callback with method DELETE
 *
 * @param {String} url Request URL
 * @param {Object} params Request params
 * @param {Function} callback callback
 */
const apiDelete = (url = "", params = {}, callback?: CallbackType, options?: OptionsType) => {
  return request("delete", url, params, callback, options);
};

export const useApis = () => ({
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
  request,
});

export default { get: apiGet, post: apiPost, put: apiPut, delete: apiDelete, request };
