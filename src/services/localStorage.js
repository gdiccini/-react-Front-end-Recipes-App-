const storageTokens = () => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
};

const storageMail = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
};

export { storageTokens, storageMail };
