// /* eslint-disable react-hooks/exhaustive-deps */
// // import React, { useEffect, useState } from 'react';
// // import useRecipeStore from './store';
// // import styles from './RecipeList.module.scss';
// // import cn from 'classnames';


// // const Recipe = () => {
// //     const [recipes, setRecipes] = useState([]);
// //     const [selectedRecipes, setSelectedRecipes] = useState([]);
// // }

// //   const toggleRecipeSelection = (recipeId) => {
// //     setSelectedRecipes((prevSelectedRecipes) => {
// //       if (prevSelectedRecipes.includes(recipeId)) {
// //         // Deselect recipe
// //         return prevSelectedRecipes.filter((id) => id !== recipeId);
// //       } else {
// //         // Select recipe
// //         return [...prevSelectedRecipes, recipeId];
// //       }
// //     });
// //   };


// // const RecipeList = () => {
// //   const recipes = useRecipeStore((state) => state.recipes);
// //   const selectedRecipes = useRecipeStore((state) => state.selectedRecipes);
// //   const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);
// //   const toggleRecipeSelection = useRecipeStore((state) => state.toggleRecipeSelection);
// //     const deleteSelectedRecipes = useRecipeStore((state) => state.deleteSelectedRecipes);
// //     const loadMoreRecipes = useRecipeStore((state) => state.loadMoreRecipes);


// //   useEffect(() => {
// //     fetchRecipes();
// //   }, [fetchRecipes]);

// //   const handleRecipeClick = (recipeId) => {
// //     toggleRecipeSelection(recipeId);
// //   };

    

    
// // //      const handleRecipeClick = (recipeId, event) => {
// // //     if (event.button === 0) {
// // //       // Left mouse button clicked - Go to single recipe page
// // //       console.log(`Go to recipe page for recipe ID: ${recipeId}`);
// // //     } else if (event.button === 2) {
// // //       // Right mouse button clicked - Toggle recipe selection
// // //       toggleRecipeSelection(recipeId);
// // //     }
// // //   }; 
// //   const handleDeleteClick = () => {
// //       deleteSelectedRecipes();
// //       console.log('deleteSelectedRecipes',deleteSelectedRecipes)
// //   };

// // const handleLoadMoreClick = () => {
// //     loadMoreRecipes();
// //     console.log('loadMoreRecipes', loadMoreRecipes);
// //   };

// // //       const handleScroll = (event) => {
// // //     const { scrollTop, clientHeight, scrollHeight } = event.target;
// // //     if (scrollHeight - scrollTop === clientHeight) {
// // //       loadMoreRecipes();
// // //     }
// // //   };
    
// //   return (
// //     <ul className={styles.cardList}>
// //           {recipes.map((recipe) => ( 
// //         <div
// //           key={recipe.id}
// //         //   className={`recipeCard ${selectedRecipes.has(recipe.id) ? 'selected' : ''}`}
// //               className={cn(styles.card, `recipeCard ${selectedRecipes.has(recipe.id) ? 'selected' : ''}`)}
// //         //   onClick={() => handleRecipeClick(recipe.id)}
// //               onClick={(event) => handleRecipeClick(recipe.id, event)}
// //         >
// //           <h3 className={styles.recipeTitle}>{recipe.name}</h3>
// //           <p className={styles.description}>{recipe.description}</p>
// //               </div>
              
// //       ))}
// //        {selectedRecipes.size > 0 && (
// //         <button className="delete-button" onClick={handleDeleteClick}>
// //           Delete
// //         </button>
// //       )}
// //       {/* {recipes.length === 14 && (
// //         <button className="load-more-button" onClick={handleLoadMoreClick}>
// //           Load More
// //         </button>
// //           )} */}
        
// //     </ul>
// //   );
// // };

// // export default RecipeList;


// import React, { useEffect } from 'react';
// import useRecipeStore from './store';
// import styles from './RecipeList.module.scss';
// import cn from 'classnames';

// const RecipeList = () => {
//   const recipes = useRecipeStore((state) => state.recipes);
//   const selectedRecipes = useRecipeStore((state) => state.selectedRecipes);
//   const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);
//   const toggleRecipeSelection = useRecipeStore((state) => state.toggleRecipeSelection);
//   const deleteSelectedRecipes = useRecipeStore((state) => state.deleteSelectedRecipes);
//   const loadMoreRecipes = useRecipeStore((state) => state.loadMoreRecipes);

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

// //   const handleRecipeClick = (recipeId, event) => {
// //     if (event.button === 0) {
// //       // Left mouse button clicked - Go to single recipe page
// //       console.log(`Go to recipe page for recipe ID: ${recipeId}`);
// //     } else if (event.button === 2) {
// //       // Right mouse button clicked - Toggle recipe selection
// //       toggleRecipeSelection(recipeId);
// //     }
// //   };
//     const handleRecipeClick = (recipeId) => {
//     toggleRecipeSelection(recipeId);
//   };

//   const handleDeleteClick = () => {
//     deleteSelectedRecipes();
//   };

//   const handleScroll = (event) => {
//     const { scrollTop, clientHeight, scrollHeight } = event.target;
//     if (scrollHeight - scrollTop === clientHeight) {
//       loadMoreRecipes();
//     }
//   };

//   return (
//    <ul className={styles.cardList} onScroll={handleScroll}>
//       {recipes.map((recipe) => (
//         <div
//           key={recipe.id}
//           className={cn(styles.card, `recipeCard ${selectedRecipes.has(recipe.id) ? 'selected' : ''}`)}
//           onClick={(event) => handleRecipeClick(recipe.id, event)}
//         >
//            <h3 className={styles.recipeTitle}>{recipe.name}</h3>
//             <p className={styles.description}>{recipe.description}</p>
//         </div>
//       ))}
//       {selectedRecipes.length > 0 && (
//         <button className="delete-button" onClick={handleDeleteClick}>
//           Delete
//         </button>
//       )}
//     </ul>
//   );
// };

// export default RecipeList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import useRecipeStore from './store';
// import styles from './RecipeList.module.scss';
// import cn from 'classnames';

// const BeerList = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipes, setSelectedRecipes] = useState([]);
//   const [showDeleteButton, setShowDeleteButton] = useState(false);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const fetchRecipes = async () => {
//     try {
//       const response = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=15');
//       const data = response.data;
//       setRecipes(data);
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   };

//   const handleRecipeClick = (recipeId, event) => {
//     if (event.button === 0) {
//       // Left mouse button clicked - Go to single recipe page
//       console.log(`Go to recipe page for recipe ID: ${recipeId}`);
//     } else if (event.button === 2) {
//       // Right mouse button clicked - Toggle recipe selection
//       toggleRecipeSelection(recipeId);
//     }
//   };

//   const toggleRecipeSelection = (recipeId) => {
//     setSelectedRecipes((prevSelectedRecipes) => {
//       if (prevSelectedRecipes.includes(recipeId)) {
//         // Deselect recipe
//         return prevSelectedRecipes.filter((id) => id !== recipeId);
//       } else {
//         // Select recipe
//         return [...prevSelectedRecipes, recipeId];
//       }
//     });
//   };

//   const handleDeleteClick = () => {
//     setRecipes((prevRecipes) => {
//       const updatedRecipes = prevRecipes.filter((recipe) => !selectedRecipes.includes(recipe.id));
//       setSelectedRecipes([]);
//       setShowDeleteButton(false);
//       return updatedRecipes.slice(0, 15);
//     });
//   };

//   const handleScroll = (event) => {
//     const { scrollTop, clientHeight, scrollHeight } = event.target;
//     if (scrollHeight - scrollTop === clientHeight) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   useEffect(() => {
//     fetchRecipes();
//   }, [page]);

//   useEffect(() => {
//     if (selectedRecipes.length > 0) {
//       setShowDeleteButton(true);
//     } else {
//       setShowDeleteButton(false);
//     }
//   }, [selectedRecipes]);

//   return (
//     <ul className={styles.cardList} onScroll={handleScroll}>
//       {recipes.map((recipe) => (
//         <div
//           key={recipe.id}
//           className={cn(styles.card, `recipeCard ${selectedRecipes.has(recipe.id) ? 'selected' : ''}`)}
//           onClick={(event) => handleRecipeClick(recipe.id, event)}
//         >
//           <h3 className={styles.recipeTitle}>{recipe.name}</h3>
//           <p className={styles.description}>{recipe.description}</p>
//         </div>
//       ))}
//       {showDeleteButton && (
//         <button className="delete-button" onClick={handleDeleteClick}>
//           Delete
//         </button>
//       )}
//     </ul>
//   );
// };

// export default BeerList;


// import React, { useEffect } from 'react';
// import useRecipeStore from './store';


// import styles from './RecipeList.module.scss';
// import cn from 'classnames';

// const RecipeList = () => {
//   const recipes = useRecipeStore((state) => state.recipes);
//   const selectedRecipes = useRecipeStore((state) => state.selectedRecipes);
// //   const showDeleteButton = useRecipeStore((state) => state.showDeleteButton);
//   const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);
//   const toggleRecipeSelection = useRecipeStore((state) => state.toggleRecipeSelection);
//   const deleteSelectedRecipes = useRecipeStore((state) => state.deleteSelectedRecipes);
//   const loadMoreRecipes = useRecipeStore((state) => state.loadMoreRecipes);
//   // const deselectRecipe = useRecipeStore((state) => state.deselectRecipe);

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

// //   const handleRecipeClick = (recipeId, event) => {
// //     if (event.button === 0) {
// //       // Left mouse button clicked - Go to single recipe page
// //       console.log(`Go to recipe page for recipe ID: ${recipeId}`);
// //     } else if (event.button === 2) {
// //       // Right mouse button clicked - Toggle recipe selection
// //       toggleRecipeSelection(recipeId);
// //     }
// //   };
//       const handleRecipeClick = (recipeId) => {
//     toggleRecipeSelection(recipeId);
//   };

//   const handleDeleteClick = () => {
//       deleteSelectedRecipes();
//       console.log('handleDeleteClick', handleDeleteClick);
//   };

//   // const handleDeselectRecipe = (recipeId) => {
//   //   deselectRecipe(recipeId);
//   // };

//   const handleScroll = (event) => {
//     const { scrollTop, clientHeight, scrollHeight } = event.target;
//     if (scrollHeight - scrollTop === clientHeight) {
//       loadMoreRecipes();
//     }
//       console.log('handleScroll', handleScroll);
//   };

//   return (
//     <ul className={styles.cardList} onScroll={handleScroll}>
//       {recipes.map((recipe) => (
//         <div
//               key={recipe.id}
//             //   className={styles.card}
//          className={cn(styles.card, `recipeCard ${selectedRecipes.has(recipe.id) ? 'selected' : ''}`)}
//           onClick={(event) => handleRecipeClick(recipe.id, event)}
//         >
//           <h3 className={styles.recipeTitle}>{recipe.name}</h3>
//          <p className={styles.description}>{recipe.description}</p>
//           {/* {selectedRecipes.has(recipe.id) && (
//             <button className={styles.buttonDeselect} onClick={() => handleDeselectRecipe(recipe.id)}>
//               Deselect
//             </button>
//           )} */}
//         </div>
//       ))}
//             {selectedRecipes.size > 0 && (
//         <button className="delete-button" onClick={handleDeleteClick}>
//           Delete
//         </button>
//       )}
//       {/* {showDeleteButton && (
//         <button className={styles.button} onClick={handleDeleteClick}>
//           Delete
//         </button>
//       )} */}
//     </ul>
//   );
// };

// export default RecipeList;


// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import { useStore } from "./store";

// const RecipeList = () => {
//   const {
//     recipes,
//     selectedRecipes,
//     fetchRecipes,
//     deleteSelectedRecipes,
//     toggleRecipeSelection,
//   } = useStore();

//   const navigate = useNavigate();

//   const isRecipiesLoaded = recipes.length > 0;

//   useEffect(() => {
//     if (!isRecipiesLoaded) {
//       fetchRecipes();
//     }
//   }, [fetchRecipes, isRecipiesLoaded, recipes.length]);

//   const handleRecipeClick = (recipe) => {
//     // Navigate to single recipe page
//     navigate(`/recipe/${recipe.id}`);
//   };

//   const handleRecipeRightClick = (e, recipe) => {
//     e.preventDefault();
//     toggleRecipeSelection(recipe);
//   };

//   const handleDeleteClick = () => {
//     deleteSelectedRecipes();
//   };

//   return (

//   )
// }






import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "./store";
import styles from './RecipeList.module.scss';
import cn from 'classnames';


const RecipeList = () => {
  const {
    recipes,
    selectedRecipes,
    fetchRecipes,
    deleteSelectedRecipes,
    toggleRecipeSelection,
  } = useStore();

  const navigate = useNavigate();

  const isRecipiesLoaded = recipes.length > 0;

  //   const addSelectedRecipes = id => {
  //   if (selectedRecipes.includes(id)) {
  //     const index = selectedRecipes.indexOf(id);
  //     selectedRecipes.splice(index, 1);
  //   } else {
  //     selectedRecipes.push(id);
  //   }
  //   console.log(selectedRecipes);
  // };

  useEffect(() => {
    if (!isRecipiesLoaded) {
      fetchRecipes();
    }
  }, [fetchRecipes, isRecipiesLoaded, recipes.length]);

  const handleRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
  };

  const handleRecipeRightClick = (e, recipe) => {
    e.preventDefault();
    toggleRecipeSelection(recipe);
  };

  const handleDeleteClick = () => {
    deleteSelectedRecipes();
  };


  return (
    <ul className={styles.cardList}>
      {recipes.length === 0 && <p>Loading...</p>}
      {recipes.map((recipe) => (
        <li
          key={recipe.id}
          onClick={() => handleRecipeClick(recipe)}
          onContextMenu={(e) => handleRecipeRightClick(e, recipe)}
          // className={`recipe-card ${
          //   selectedRecipes.includes(recipe) ? "selected" : ""
          // }`}
          className={cn(styles.card, `recipeCard ${selectedRecipes.includes(recipe) ? 'selected' : ''}`)}
          //  addSelectedRecipes={addSelectedRecipes}
        >
        <h3 className={styles.recipeTitle}>{recipe.name}</h3>
      <p className={styles.description}>{recipe.description}</p>
        </li>
      ))}

      {selectedRecipes.length > 0 && (
        <button className="delete-button" onClick={handleDeleteClick}>
          Delete
        </button>
      )}
    </ul>
  );
};

export default RecipeList;