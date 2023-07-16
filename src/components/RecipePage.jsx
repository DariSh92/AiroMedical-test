import { useParams } from "react-router-dom";

import { useStore } from "./store";
import styles from './RecipePage.module.scss';

const RecipePage = () => {
  const { recipeId } = useParams();
  const { recipes } = useStore();

  const recipe = recipes.find((recipe) => recipe.id === +recipeId);

  return (
    <div>
      {recipe ? (
        <div className={styles.recipeDiv}>
                  <img src={recipe.image_url} alt="bear" className={styles.beerImage } />
          <h2 className={styles.name}>{recipe.name}</h2>
          <p className={styles.description}>{recipe.description}</p>
        </div>
      ) : (
        <div>Recipe not found.</div>
      )}
    </div>
  );
};

export default RecipePage;