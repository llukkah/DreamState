import axios from "axios";

// const baseUrl = 'http://localhost:3000';
// const baseUrl = process.env.NODE_ENV === 'production' ? 'url to domain' : 'http://localhost:3000' 
const baseUrl = process.env.NODE_ENV === 'production' ? 'url to domain' : 'https://dreamstatellukkah.herokuapp.com/' 
// https://dreamstatellukkah.herokuapp.com/
const api = axios.create({
    baseURL: baseUrl,
  });
  
// ========================================
// ================ DREAMS ================
// ========================================

export const getAllDreams = async () => {
    const resp = await api.get(`/dreams`);
    return resp.data;
  };
  
export const getOneDream = async (dreamId, dreamData) => {
    const resp = await api.get(`/dreams/${dreamId}`, dreamData);
    return resp.data;
  };

export const getRandomDream = async () => {
    const resp = await api.get(`/randomDream`);
    return resp.data;
  };

// ========================================
// ================ INTERPRET =============
// ========================================

export const getFood = async () => {
    const resp = await api.get(`/food`);
    return resp.data;
  };

export const getBeauty = async () => {
    const resp = await api.get(`/beauty`);
    return resp.data;
  };

export const getFashion = async () => {
    const resp = await api.get(`/fashion`);
    return resp.data;
  };

export const getTech = async () => {
    const resp = await api.get(`/tech`);
    return resp.data;
  };

export const getPodcast = async () => {
    const resp = await api.get(`/podcast`);
    return resp.data;
  };

export const getBooks = async () => {
    const resp = await api.get(`/books`);
    return resp.data;
  };

export const getMovies = async () => {
    const resp = await api.get(`/movies`);
    return resp.data;
  };