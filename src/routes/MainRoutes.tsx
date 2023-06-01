import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy, memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { HOME_URL } from '@config/urls';

const LoadingCircle = memo(() => (
    <CircularProgress
        sx={{
            m: 'auto',
            position: 'fixed',
            top: 'calc(50% - 20px)',
            left: 'calc(50% - 20px)',
            transform: 'translate(-50%,50%)',
        }}
    />
));

const HomePage = lazy(() => import('@pages/home'));

const MainRoutes = createBrowserRouter([
    {
        path: HOME_URL,
        element: (
            <Suspense fallback={<LoadingCircle />}>
                <HomePage />
            </Suspense>
        ),
    },
]);

export default MainRoutes;