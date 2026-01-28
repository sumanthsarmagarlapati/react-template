import axios from "axios";

const env = import.meta.env;
export async function getData(params: any) {
  return await axios.get(`${env.VITE_SERVER}`, { params: { ...params } });
}


export async function getUserDetails() {
  return {
    data: {
      name: "Sumanth Sarma Garlapati January",
      age: 25,
    },
    status: 201,
    message: "Success",
  }
  // return await axios.get(`${env.VITE_SERVER}/userDetails`)
}