const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  const minPass = 7;
  if (!password) return false;
  if (password.length < minPass) return false;
  return true;
};

export { validateEmail, validatePassword };
