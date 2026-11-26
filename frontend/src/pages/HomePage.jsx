import { useEffect, useState } from 'react';
import api from '../services/api.js';

export default function HomePage() {
  const [apiStatus, setApiStatus] = useState('Checking backend connection...');

  useEffect(() => {
    api
      .get('/health/')
      .then((res) => setApiStatus(`Connected: ${res.data.project}`))
      .catch(() => setApiStatus('Backend offline — start Django server on port 8000'));
  }, []);

  return (
    <section className="card">
      <h1>Authentic Sri Lankan Recipes</h1>
      <p>Owner: CST23074 — Recipe feed, live search, category &amp; spice-level filters.</p>
      <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>API Status: {apiStatus}</p>
    </section>
  );
}
