import axios from 'axios';

const axiosAuth = axios.create();

axiosAuth.interceptors.request.use((config) => {
	const token = localStorage.getItem('accessToken');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default axiosAuth;
