import { useState } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const MealFormContainer = () => {
  const [meals, setMeals] = useState([]);

  const addMealHandler = (newMeal) => {
    setMeals((prevMeals) => [...prevMeals, newMeal]);
  };

  return (
    <>
      <MealsSummary onAddMeal={addMealHandler} />
      <AvailableMeals meals={meals} />
    </>
  );
};

export default MealFormContainer;
