import axios from "axios";

const dogApi = axios.create({
  baseURL: "https://dog.ceo/api"
});

export const getAllDogs = () => dogApi.get("/breeds/list/all");

export const getImages = (breed) => dogApi.get(`/breed/${breed}/images`);
