import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AppContext from '../../context/Context/AppContext';

function Profile() {
  const { setSearchRender } = useContext(AppContext);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setSearchRender(false);
    const getEmail = JSON.parse(localStorage.getItem('user'));
    if (getEmail) {
      setEmail(getEmail.email);
    }
  }, []);

  const history = useHistory();

  const toFavoriteRecipes = () => {
    history.push('/favorite-recipes');
  };

  const toDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header title="Profile" />
      <section>
        <p data-testid="profile-email">
          {email}
        </p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ toDoneRecipes }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ toFavoriteRecipes }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ clearLocalStorage }
        >
          Logout
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
