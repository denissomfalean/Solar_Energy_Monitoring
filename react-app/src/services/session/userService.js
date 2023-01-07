import { SessionStorageKeys, getSessionItem, setSessionItem, UserRoles } from "./Utils";

export function registerUser(email, password, name, address) {
  let users = getSessionItem(SessionStorageKeys.USERS);
  if (users === null) {
    users = [];
  }

  let registeredUser = {
    email: email,
    password: password,
    name: name,
    address: address,
    role: UserRoles.TENANT,
  };

  users.push(registeredUser);

  setSessionItem(SessionStorageKeys.USERS, users);
  setSessionItem(SessionStorageKeys.USER, registeredUser)
}
