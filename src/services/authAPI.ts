import http from "utils/http";
import { User } from "types/user";

export const current = async () => {
  return await http.get("/users");
};

export const login = async (email: string, password: string) => {
  return await http.post("/users/login", { user: { email, password } });
};

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  return await http.post("/users", { user: { username, email, password } });
};

export const save = async (user: User) => {
  return await http.put(`/users/${user.id}`, user);
};
