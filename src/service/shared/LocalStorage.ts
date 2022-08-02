const getLastName = () => localStorage.getItem("lastName");
const setLastName = (lastName: string) => localStorage.setItem("lastName", lastName);
const getFirstName = () => localStorage.getItem("firstName");
const setEmail = (email: string) => localStorage.setItem("email", email);
const getEmail = () => localStorage.getItem("email");
const setFirstName = (firstName: string) => localStorage.setItem("firstName", firstName);
const setToken = (token: string) => localStorage.setItem("x-access-token", token);
const getToken = () => localStorage.getItem("x-access-token");
const setUserId = (userId: string) => localStorage.setItem("userId", userId);
const getUserId = () => localStorage.getItem("userId");

export {
  getLastName,
  setLastName,
  setToken,
  getToken,
  getFirstName,
  setFirstName,
  setUserId,
  getUserId,
  getEmail,
  setEmail
};
