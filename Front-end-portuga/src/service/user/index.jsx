// import { api } from "../api";

export const UserService = {
  loginUser: (email, senha) => api.post('/usuarios/login', { email, senha }),
  registerUser: (email, senha) => api.post('/usuarios', { email, senha }),
  userBalance: (userId) => api.get(`/usuarios/${userId}/saldo`),
}