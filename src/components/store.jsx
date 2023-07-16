// // import { create } from 'zustand';

// // const useRecipeStore = create((set) => ({
// //     recipes: [],
// //     selectedRecipes: new Set(),
// //     currentPage: 1,


// //   fetchRecipes: async () => {
// //     try {
// //       const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=15');
// //       const data = await response.json();
// //         set({ recipes: data });
// //         console.log(data);
// //     } catch (error) {
// //         console.error('Error fetching recipes:', error);

// //     }
// //   },

// //   toggleRecipeSelection: (recipeId) => {
// //     set((state) => {
// //       const selectedRecipes = new Set(state.selectedRecipes);
// //       if (selectedRecipes.has(recipeId)) {
// //         selectedRecipes.delete(recipeId);
// //       } else {
// //         selectedRecipes.add(recipeId);
// //       }
// //       return { selectedRecipes };
// //     });
// //   },

// //   deleteSelectedRecipes: () => {
// //     set((state) => {
// //         const updatedRecipes = state.recipes.filter((recipe) => !state.selectedRecipes.has(recipe.id));
// //         console.log(updatedRecipes);
// //       return {
// //         recipes: updatedRecipes,
// //         selectedRecipes: new Set(),
// //       };

// //     });
// //     },


// //     loadMoreRecipes: async () => {
// //         return (
// //           set((state) => ({ currentPage: state.currentPage + 1 }), () => {
// //               this.fetchRecipes();

// //           }));

// //     },
// // }));





// // export default useRecipeStore;
// // import { create } from 'zustand';

// // const useRecipeStore = create((set) => ({
// //   recipes: [],
// //   selectedRecipes: [],
// //     currentPage: 1,

// //       fetchRecipes: async () => {
// //     try {
// //       const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=15');
// //       const data = await response.json();
// //       set({ recipes: data });
// //     } catch (error) {
// //       console.error('Error fetching recipes:', error);
// //     }
// //   },

// // //   fetchRecipes: async () => {
// // //     try {
// // //       const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=15');
// // //       const data = await response.json();
// // //       set({ recipes: data });
// // //     } catch (error) {
// // //       console.error('Error fetching recipes:', error);
// // //     }
// // //   },

// //   toggleRecipeSelection: (recipeId) => {
// //     set((state) => {
// //       const selectedRecipes = [...state.selectedRecipes];
// //       const index = selectedRecipes.indexOf(recipeId);
// //       if (index > -1) {
// //         selectedRecipes.splice(index, 1);
// //       } else {
// //         selectedRecipes.push(recipeId);
// //       }
// //       return { selectedRecipes };
// //     });
// //   },

// //   deleteSelectedRecipes: () => {
// //     set((state) => {
// //       const recipes = state.recipes.filter((recipe) => !state.selectedRecipes.includes(recipe.id));
// //       return {
// //         recipes,
// //         selectedRecipes: [],
// //       };
// //     });
// //   },

// //   loadMoreRecipes: async () => {
// //     set((state) => ({ currentPage: state.currentPage + 1 }), () => {
// //       this.fetchRecipes();
// //     });
// //   },
// // }));

// // export default useRecipeStore;



// import { create } from 'zustand';
// // import axios from 'axios';


// const useRecipeStore = create((set) => ({
//   recipes: [],
//   selectedRecipes: [],
//   showDeleteButton: false,
//   currentPage: 1,

//   fetchRecipes: async () => {
//     try {
//       // const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${this.state.currentPage}&per_page=15`);
//       const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=15');
//       const data = await response.json();
//       set({ recipes: data });
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   },

//   toggleRecipeSelection: (recipeId) => {
//     set((state) => {
//       const selectedRecipes = [...state.selectedRecipes];
//       const index = selectedRecipes.indexOf(recipeId);
//       if (index > -1) {
//         selectedRecipes.splice(index, 1);
//       } else {
//         selectedRecipes.push(recipeId);
//       }
//       return { selectedRecipes };
//     });
//   },


  // deleteSelectedRecipes: () => {
  // set((state) => {
  //   const recipes = state.recipes.filter((recipe) => !state.selectedRecipes.includes(recipe.id));
  //   return {
  //     recipes,
  //     selectedRecipes: [],
  //   };
  // });
  // },

  //   deleteSelectedRecipes: () => {
  //     set((state) => {
  //       const recipes = state.recipes.filter((recipe) => !state.selectedRecipes.includes(recipe.id));
  //       return {
  //         recipes,
  //         selectedRecipes: [],
  //         // showDeleteButton: true,
  //       };
  //     });
  //   }

//   deleteSelectedRecipes: () => {
//     set((state) => {
//       const updatedRecipes = state.recipes.filter((recipe) => !state.selectedRecipes.has(recipe.id));
//       console.log(updatedRecipes);
//       return {
//         recipes: updatedRecipes,
//         selectedRecipes: [],
//       };

//     });
//   },

//   loadMoreRecipes: async () => {
//     set((state) => ({ currentPage: state.currentPage + 1 }), () => {
//       this.fetchRecipes();
//     });
//   },

//   deselectRecipe: (recipeId) => {
//     set((state) => ({
//       selectedRecipes: state.selectedRecipes.filter((id) => id !== recipeId)
//     }));
//   },
// }));

// export default useRecipeStore;



import { create } from "zustand";

export const useStore = create((set) => ({
  recipes: [],
  selectedRecipes: [],

  fetchRecipes: async () => {
    try {
      const response = await fetch(
        "https://api.punkapi.com/v2/beers?page=1&per_page=15"
      );
      const data = await response.json();

      set({ recipes: data });
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  },

  deleteSelectedRecipes: () => {
    set((state) => ({
      recipes: state.recipes.filter(
        (recipe) => !state.selectedRecipes.includes(recipe)
      ),
      selectedRecipes: [],
    }));
  },

  toggleRecipeSelection: (recipe) => {
    set((state) => {
      const isSelected = state.selectedRecipes.includes(recipe);
      const updatedSelectedRecipes = isSelected
        ? state.selectedRecipes.filter((el) => el !== recipe)
        : [...state.selectedRecipes, recipe];
      return { selectedRecipes: updatedSelectedRecipes };
    });
  },
}));