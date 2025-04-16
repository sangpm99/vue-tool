import type { AxiosResponse } from "axios";
import axios from "axios";

const errors = ref<any>(null);

const axiosDefault = axios.create();

axiosDefault.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

axiosDefault.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: any) => {
    errors.value = error;
    return Promise.reject(error);
  },
);

export { axiosDefault, errors };
