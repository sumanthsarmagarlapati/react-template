import axios, { type AxiosResponse } from "axios";

const env = import.meta.env;
export async function getData(params: any) {
  return await axios.get(`${env.VITE_SERVER}`, { params: { ...params } });
}


export async function getUserDetails(): Promise<AxiosResponse<any>> {
  return {
    data: {
      name: "Sumanth Sarma Garlapati",
      age: 25,
    },
    status: 201,
    statusText: "Success",
    headers: {},
    config: {},
  }
  // return await axios.get(`${env.VITE_SERVER}/userDetails`)
}