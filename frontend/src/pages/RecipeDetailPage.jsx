import { useParams } from 'react-router-dom';

export default function RecipeDetailPage() {
  const { id } = useParams();

  return (
    <section className="card">
      <h1>Recipe Details #{id}</h1>
      <p>Owner: CST23022 — Full recipe view, ingredients list, instructions, and live comments.</p>
    </section>
  );
}
