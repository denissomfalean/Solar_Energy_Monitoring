import { SessionStorageKeys, getSessionItem, setSessionItem } from "./Utils";

export function areCredentialsCorrect(email, password) {
  let users = getSessionItem(SessionStorageKeys.USERS);
  
  if (users === null) {
    return false;
  }

  let loggedUser = users.find(user => user.email === email && user.password == password);

  if(loggedUser === undefined){
    return false;
  }

  return true;
}