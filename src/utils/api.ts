
import store from '@/lib/store';
import { BASEURL } from './util';
import { serialize } from './util';

const request = (
	method: 'get' | 'post' | 'put' | 'patch' | 'delete',
	endpoint: string,
	params: any = {},
	headers: any = {},
	formData: any = false
) => {
	const { token } = store.getState().user;

	if (token) headers['Authorization'] = `Bearer ${token}`;
	if (!formData) {
		headers['Content-Type'] = 'application/json';
	} else {
		headers['Content-Type'] = 'multipart/form-data';
	}

	let url: string = `${BASEURL}${endpoint}`;
	const config = {
		method,
		headers: {
			Accept: 'application/json',
			...headers,
		},
		body: params,
	};

	if (method === 'get') {
		if (Object.keys(params).length > 0) url = url.concat(`?${serialize(params)}`);
		delete config.body;
	}

	console.log(url, config);

	return fetch(url, config)
		.then((res) => res.json())
		.then((res) => res)
		.catch((err) => {
			console.log('err', err);
			return err;
		});
};

export const get = (url: string, params = {}, headers: any = {}) => request('get', url, params, headers);

export const post = (url: string, params = {}, headers: any = {}, formData: any = false) => request('post', url, params, headers, formData);

export const deleting = (url: string, params = {}, headers: any = {}) => request('delete', url, params, headers);
