import { api } from "../api";

export const UserService = {
  loginUser: (email, senha) => api.post('/portuga/usuario', { email, senha }),
  registerUser: (email, senha) => api.post('/portuga/usuarios', { email, senha }),
}