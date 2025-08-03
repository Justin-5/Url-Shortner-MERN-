import axiosInstance from '../utils/axiosInstance';

export const createShortUrl = async (url) => {
    const {data} =await axiosInstance.post('http://localhost:3000/api/shorten', { url })
    return data.shortUrl
}