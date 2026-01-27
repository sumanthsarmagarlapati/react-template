import axios from "axios";

const env = import.meta.env;
export async function getData(params: any) {
  return await axios.get(`${env.VITE_SERVER}`, { params: { ...params } });
}
 