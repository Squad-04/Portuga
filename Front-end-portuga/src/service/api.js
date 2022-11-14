import axios from "redaxios";

export const api = axios.create({
  baseURL: 'http//:localhost8080/portuga/usuario',
});