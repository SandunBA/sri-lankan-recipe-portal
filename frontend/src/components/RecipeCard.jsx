import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <article className="card">
      <h3>
        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
      </h3>
      <p>{recipe.description}</p>
    </article>
  );
}
