const fetchMeals = async () => {
  const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  console.log(meals);
};

const fetchDrinks = async () => {
  const drinks = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  console.log(drinks);
};

export {
  fetchMeals,
  fetchDrinks,
};
