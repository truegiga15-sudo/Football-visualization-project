import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '@/components/ui/Loader/Loader';
import styles from './MinimalLayout.module.css';

export function MinimalLayout() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loader label="Loading" />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
