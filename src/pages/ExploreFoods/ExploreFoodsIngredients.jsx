/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/Context/AppContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { fetchIngredients } from '../../services/mealsAPI';
import { RECIPES_LENGTH } from '../../helpers/constants';

export default function ExploreFoodsIngredients() {
  const {
    setSearchRender,
    setAutomaticFilterByIngredient,
    setIngredient,
  } = useContext(AppContext);

  const [ingredients, setIngredients] = useState([]);
  const history = useHistory();

  const getIngredients = async () => {
    const results = await fetchIngredients();
    setIngredients(results.slice(0, RECIPES_LENGTH));
  };

  const handleRedirect = (param) => {
    setAutomaticFilterByIngredient(true);
    setIngredient(param);
    history.push('/foods');
  };

  useEffect(() => {
    setSearchRender(false);
    getIngredients();
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" />
      {
        ingredients && ingredients.map((ingredient, index) => (
          <div
            key={ ingredient.strIngredient }
            data-testid={ `${index}-ingredient-card` }
          >
            <button
              type="button"
              onClick={ () => handleRedirect(ingredient.strIngredient) }
            >
              <h2
                data-testid={ `${index}-card-name` }

              >
                { ingredient.strIngredient }
              </h2>
              <img
                data-testid={ `${index}-card-img` }
                alt={ ingredient.strIngredient }
                src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              />
            </button>

          </div>
        ))
      }
      <Footer />
    </div>
  );
}
