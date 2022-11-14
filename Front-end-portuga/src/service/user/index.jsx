import { api } from "../api";
import axios from "redaxios";

export const UserService = {
  loginUser: (email, senha) => api.post('/portuga/usuario', { email, senha }),
  registerUser: (email, senha) => api.post('/portuga/usuarios', { email, senha }),
}


