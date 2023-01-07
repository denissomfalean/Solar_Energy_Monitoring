import {
  SessionStorageKeys,
  getSessionItem,
  setSessionItem,
  UserRoles,
} from "./Utils";

export function areCredentialsCorrect(email, password) {
  let users = getSessionItem(SessionStorageKeys.USERS);

  if (users === null) {
    return false;
  }

  let loggedUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (loggedUser === undefined) {
    return false;
  }

  setSessionItem(SessionStorageKeys.USER, loggedUser);

  return true;
}

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

export function addDefaultUsers() {
  let users = [
    {
      email: "john.doe@solaris.com",
      password: "12345",
      name: "John Doe",
      address: "USA, NY, NYC, Central Park, 21, Ap.11",
      role: UserRoles.OWNER,
    },
    {
      email: "larry.mc@uidsol.uk",
      password: "98765",
      name: "Larry McCharthur",
      address: "UK, Manchester, Freedom Street, 90",
      role: UserRoles.TENANT,
    },
    {
      email: "luis.vitton@lvton.com",
      password: "00000",
      name: "Luis Vitton",
      address: "USA, NY, NYC, Central Park, 9, Ap.111",
      role: UserRoles.TENANT,
    },
  ];
  setSessionItem(SessionStorageKeys.USERS, users);
}
