import React, { useState } from 'react';
import { Redirect } from 'react-router';

import '../styles/Footer.css';

const Footer = () => {
  const [drinksRedirect, setDrinksRedirect] = useState(false);
  const [exploreRedirect, setExploreRedirect] = useState(false);
  const [mealsRedirect, setMealsRedirect] = useState(false);

  const handleClick = ({ target: { name } }) => {
    switch (name) {
    case 'drinks':
      setDrinksRedirect(true);
      break;
    case 'explore':
      setExploreRedirect(true);
      break;
    case 'meals':
      setMealsRedirect(true);
      break;
    default:
      break;
    }
  };

  return (
    <footer data-testid="footer">
      <button type="button" onClick={ handleClick }>
        <img
          alt="drinks icon"
          data-testid="drinks-bottom-btn"
          name="drinks"
          src="drinkIcon.svg"
        />
      </button>
      <button type="button" onClick={ handleClick }>
        <img
          alt="explore icon"
          data-testid="explore-bottom-btn"
          name="explore"
          src="exploreIcon.svg"
        />
      </button>
      <button type="button" onClick={ handleClick }>
        <img
          alt="meals icon"
          data-testid="food-bottom-btn"
          name="meals"
          src="mealIcon.svg"
        />
      </button>
      {drinksRedirect && <Redirect to="/bebidas" />}
      {exploreRedirect && <Redirect to="/explorar" />}
      {mealsRedirect && <Redirect to="/comidas" />}
    </footer>
  );
};

export default Footer;
