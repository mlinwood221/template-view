import axiosInstance from './axiosInstance'

export const getTemplates = () => {
  return axiosInstance.get('/templates')
};
