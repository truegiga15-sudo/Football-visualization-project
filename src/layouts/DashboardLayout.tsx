import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from '@/components/ui/Loader/Loader';
import { ROUTE_PATHS } from '@/routes/paths';
import styles from './DashboardLayout.module.css';

export function DashboardLayout() {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar} aria-label="Analytics navigation">
        <Link to={ROUTE_PATHS.dashboard}>Overview</Link>
        <Link to="/match">Match</Link>
      </aside>
      <main className={styles.content}>
        <Suspense fallback={<Loader label="Loading analytics workspace" />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
