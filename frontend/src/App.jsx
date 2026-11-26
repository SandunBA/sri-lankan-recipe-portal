import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import AuthProfilePage from './pages/AuthProfilePage.jsx';
import CategoriesPage from './pages/CategoriesPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ManageRecipesPage from './pages/ManageRecipesPage.jsx';
import RecipeDetailPage from './pages/RecipeDetailPage.jsx';
import RecipeFormPage from './pages/RecipeFormPage.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
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
      </main>
      <Footer />
    </div>
  );
}
