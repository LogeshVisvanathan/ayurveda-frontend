import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import FarmerPortalPage from '@/components/pages/FarmerPortalPage';
import ProcessingUnitPage from '@/components/pages/ProcessingUnitPage';
import LaboratoryTestingPage from '@/components/pages/LaboratoryTestingPage';
import ConsumerPortalPage from '@/components/pages/ConsumerPortalPage';
import ContactPage from '@/components/pages/ContactPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "farmer-portal",
        element: <FarmerPortalPage />,
        routeMetadata: {
          pageIdentifier: 'farmer-portal',
        },
      },
      {
        path: "processing-unit",
        element: <ProcessingUnitPage />,
        routeMetadata: {
          pageIdentifier: 'processing-unit',
        },
      },
      {
        path: "laboratory-testing",
        element: <LaboratoryTestingPage />,
        routeMetadata: {
          pageIdentifier: 'laboratory-testing',
        },
      },
      {
        path: "consumer-portal",
        element: <ConsumerPortalPage />,
        routeMetadata: {
          pageIdentifier: 'consumer-portal',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
