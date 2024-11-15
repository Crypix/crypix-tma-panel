import axios from 'axios';
import { API_GATEWAY } from '@const/urls';

const ApiAxios = axios.create({
	baseURL: API_GATEWAY,
});

export { ApiAxios };
