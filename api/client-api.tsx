import axios, {
  AxiosInstance,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from "axios";
import { apiUrl } from "../helpers/shared";


const responseInstance = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );
};

const requestInstance = ({
  instance,
  headers,
}: {
  instance: AxiosInstance;
  headers: AxiosRequestHeaders;
}) => {
  instance.interceptors.request.use(
    async (
      config: InternalAxiosRequestConfig
    ): Promise<InternalAxiosRequestConfig> => {
      return {
        ...config,
        headers,
      };
    }
  );
};

export const clientApi = {
  privateInstance: axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${"token"}`,
    },
  }),
  privateInstanceForFile: axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${"token"}`,
    },
  }),
  publicInstanceForFile: axios.create({
    baseURL: apiUrl,
  }),
  publicInstance: axios.create({
    baseURL: apiUrl,
  }),
};

responseInstance(clientApi.privateInstance);
responseInstance(clientApi.privateInstanceForFile);
responseInstance(clientApi.publicInstance);
responseInstance(clientApi.publicInstanceForFile);

requestInstance({
  instance: clientApi.privateInstance,
  headers: { "Content-Type": "application/json" } as AxiosRequestHeaders,
});
requestInstance({
  instance: clientApi.privateInstanceForFile,
  headers: { "Content-Type": "multipart/form-data" } as AxiosRequestHeaders,
});
requestInstance({
  instance: clientApi.publicInstance,
  headers: { "Content-Type": "application/json" } as AxiosRequestHeaders,
});
requestInstance({
  instance: clientApi.publicInstanceForFile,
  headers: { "Content-Type": "multipart/form-data" } as AxiosRequestHeaders,
});
