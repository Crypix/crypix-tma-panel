import axios from 'axios';
import { API_GATEWAY } from '../const/const';

const ApiAxios = axios.create({
	baseURL: API_GATEWAY,
});

export { ApiAxios };
