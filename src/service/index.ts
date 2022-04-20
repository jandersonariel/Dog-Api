import Axios from 'axios'
import { IBreedData } from './types'

const baseURL = 'https://api.thedogapi.com/v1/'

const initAxios = (baseURL: string) => {
  const axios = Axios.create({
    headers:{
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    "x-api-key": "4a8815fd-c245-4649-9d96-ff9fa6dcd3fc",
  },
  baseURL
  })
  return axios
}

export const serviceDogs = initAxios(baseURL)

export const serviceDogBreeds = (): Promise<IBreedData[]> => {
  return serviceDogs.get('breeds')
  .then((response) =>{
    return response.data
  })
  .catch((error) => {
    return error
  })
}

export const serviceDogBreedsSearch = (valor: string): Promise<IBreedData[]> => {
  return serviceDogs.get('breeds/search', {params: {q: `${valor}`}})
  .then((response) =>{
    return response.data
  })
  .catch((error) => {
    return error
  })
}
