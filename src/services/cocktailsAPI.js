export const cocktailsAPI = async () => {
  const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((results) => results.json());
  return drinks;
};

export const cocktailsListAPI = async () => {
  const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((results) => results.json());
  return drinks;
};

export const cocktailsCategoriesAPI = async (category) => {
  const drinksURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const { drinks } = await fetch(drinksURL)
    .then((results) => results.json());
  return drinks;
};

export const getDrinkByName = async (name) => {
  const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((results) => results.json());
  return drinks;
};

export const getDrinkByIngredient = async (ingredient) => {
  const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((results) => results.json());
  return drinks;
};

export const getDrinkByFirstLetter = async (letter) => {
  const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((results) => results.json());
  return drinks;
};
