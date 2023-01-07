import { SessionStorageKeys, getSessionItem, setSessionItem } from "./Utils";

export function registerUser(email, password, name, address, role) {
  let users = getSessionItem(SessionStorageKeys.USERS);
  if (users === null) {
    users = [];
  }

  users.push({
    email: email,
    password: password,
    name: name,
    address: address,
    role: role,
  });

  setSessionItem(SessionStorageKeys.USERS, users);
}
