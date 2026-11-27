import { useParams } from 'react-router-dom';

export default function RecipeFormPage() {
  const { id } = useParams();

  return (
    <section className="card">
      <h1>{id ? `Edit Recipe #${id}` : 'Share a New Sri Lankan Recipe'}</h1>
      <p>Owner: CST23017 — Dynamic recipe creation/edit form with multi-ingredient rows.</p>
    </section>
  );
}
