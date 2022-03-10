export const mealsAPI = async () => {
  const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((results) => results.json());
  return meals;
};

export const mealsListAPI = async () => {
  const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((results) => results.json());
  return meals;
};

export const mealsCategoriesAPI = async (category) => {
  const mealsURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const { meals } = await fetch(mealsURL)
    .then((results) => results.json());
  return meals;
};

export const fetchByIngredient = async (ingredient) => {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((results) => results.json());
  return meals;
};

export const fetchByName = async (name) => {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((results) => results.json());
  return meals;
};

export const fetchByFirstLetter = async (letter) => {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((results) => results.json());
  return meals;
};
