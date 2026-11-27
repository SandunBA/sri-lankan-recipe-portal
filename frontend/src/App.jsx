import { Route, Routes } from 'react-router-dom';
import AuthProfilePage from './pages/AuthProfilePage.jsx';
import CategoriesPage from './pages/CategoriesPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ManageRecipesPage from './pages/ManageRecipesPage.jsx';
import RecipeDetailPage from './pages/RecipeDetailPage.jsx';
import RecipeFormPage from './pages/RecipeFormPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/recipes/new" element={<RecipeFormPage />} />
      <Route path="/recipes/:id/edit" element={<RecipeFormPage />} />
      <Route path="/recipes/:id" element={<RecipeDetailPage />} />
      <Route path="/manage" element={<ManageRecipesPage />} />
      <Route path="/auth" element={<AuthProfilePage />} />
      <Route path="/profile" element={<AuthProfilePage />} />
    </Routes>
  );
}
