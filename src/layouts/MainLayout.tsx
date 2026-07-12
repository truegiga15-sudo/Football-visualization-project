import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from '@/components/ui/Loader/Loader';
import { ROUTE_PATHS } from '@/routes/paths';
import styles from './MainLayout.module.css';

export function MainLayout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link to={ROUTE_PATHS.home} className={styles.brand}>
          Football Analytics
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          <Link to={ROUTE_PATHS.upload}>Upload</Link>
          <Link to={ROUTE_PATHS.dashboard}>Dashboard</Link>
          <Link to={ROUTE_PATHS.settings}>Settings</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<Loader label="Loading page" />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
