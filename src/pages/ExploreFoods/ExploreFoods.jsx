import React, { useEffect, useContext } from 'react';
import AppContext from '../../context/Context/AppContext';
import Header from '../../components/Header/Header';

export default function ExploreFoods() {
  const { setSearchRender } = useContext(AppContext);
  useEffect(() => {
    setSearchRender(false);
  }, []);

  return (
    <Header title="Explore Foods" />
  );
}