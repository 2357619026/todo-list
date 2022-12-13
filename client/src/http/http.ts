import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const localKey = "todo-list";
const baseURLRmote = "http://43.142.43.76:3044";
const baseURL = "http://localhost:3044";
axios.interceptors.request.use((config: AxiosRequestConfig) => {
	console.log("request", config);

	const token = localStorage.getItem(localKey);
	if (token) {
		config.headers!["Authorization"] = token;
	}
	return config;
});

axios.interceptors.response.use((response: AxiosResponse) => {
	console.log("response", response);

	const { authorization } = response.headers;
	authorization && localStorage.setItem(localKey, authorization);
	return response;
});

const http = (url: string, config: AxiosRequestConfig) => {
	return axios(baseURL + url, config)
		.then((res) => res.data)
		.catch((err) => {
			throw new Error(err.message);
		});
};

export const httpPost = (url: string, params: Record<string, string>) => {
	return http(url, { data: params, method: "POST" });
};

export const httpGet = (url: string, params?: Record<string, string>) => {
	return http(url, { method: "GET" });
};
