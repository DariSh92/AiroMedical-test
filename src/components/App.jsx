import React from 'react';
import { Route, Routes } from "react-router-dom";

import RecipeList from './RecipeList';
import RecipePage from './RecipePage';
import styles from '../components/App.module.scss';

export const App = () => {
  return (
    <div>
        <h1 className={styles.title}>Recipe Beer List</h1>
        <Routes>
            <Route index element={<RecipeList />} />
            <Route path="/recipe/:recipeId" element={<RecipePage />} />
      </Routes>
    </div>
  );
};


