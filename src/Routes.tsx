import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Main from './pages/Main';
import NotFoundPage from './pages/404';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};
