export const isMailValid = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  return emailRegex.test(email);
};
export const isPassValid = (password) => {
  const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z]).{7,}$/;
  return passRegex.test(password);
};
export const isNameValid = (name) => {
  const nameRegex = /^(?=.*?[A-Z]){1}(?=.*?[a-z]).{2,}$/;
  return nameRegex.test(name);
};
export const isSurnameValid = (surname) => {
  const surnameRegex = /^(?=.*?[A-Z]){1}(?=.*?[a-z]).{2,}$/;
  return surnameRegex.test(surname);
};
