import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/routes/paths';
export default function NotFoundPage() {
  return (
    <section>
      <h1>404</h1>
      <p>The requested page could not be found.</p>
      <Link to={ROUTE_PATHS.home}>Return home</Link>
    </section>
  );
}
