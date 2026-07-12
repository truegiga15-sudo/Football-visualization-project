import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { MainLayout } from '@/layouts/MainLayout';
import { MinimalLayout } from '@/layouts/MinimalLayout';
import { ROUTE_PATHS } from '@/routes/paths';

const HomePage = lazy(() => import('@/pages/home/HomePage'));
const UploadPage = lazy(() => import('@/pages/upload/UploadPage'));
const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage'));
const MatchPage = lazy(() => import('@/pages/match/MatchPage'));
const SettingsPage = lazy(() => import('@/pages/settings/SettingsPage'));
const NotFoundPage = lazy(() => import('@/pages/not-found/NotFoundPage'));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTE_PATHS.home, element: <HomePage /> },
      { path: ROUTE_PATHS.upload, element: <UploadPage /> },
      { path: ROUTE_PATHS.settings, element: <SettingsPage /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: ROUTE_PATHS.dashboard, element: <DashboardPage /> },
      { path: ROUTE_PATHS.match, element: <MatchPage /> },
      { path: ROUTE_PATHS.matchDetail, element: <MatchPage /> },
    ],
  },
  {
    element: <MinimalLayout />,
    children: [{ path: '*', element: <NotFoundPage /> }],
  },
]);
