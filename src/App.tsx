import { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import "./App.css";
import ErrorBoundry from "./pages/ErrorPage/ErrorPage";
import { routerMenus } from "./routes/router.menus";

const DashBoard = lazy(() => import("./pages/Dashboard/dashboard"));
const ReduxUsage = lazy(() => import("./pages/redux/reduxUsage"))
const ZodForm = lazy(() => import("./pages/forms/zod-register-form"))
const AsyncThunkReduxUsage = lazy(() => import("./pages/AsyncThunkRedux/async-thunk-redux-usage"))
const  ReactReducer = lazy(() => import("./pages/Reducer/reducer"))
const Table = lazy(() => import("./pages/Table/table"))

const routes: RouteObject[] = [
  { path: "/", element: <Navigate to={routerMenus.dashboard.path} /> },
  {
    path: routerMenus.dashboard.path,
    element: <DashBoard />,
    errorElement: <ErrorBoundry />
  },
  {
    path: routerMenus.redux_usage.path,
    element: <ReduxUsage />,
    errorElement: <ErrorBoundry />
  },
  {
    path: routerMenus.zod_form.path,
    element: <ZodForm />,
  },
  {
    path: routerMenus.async_thunk_redux_usage.path,
    element: <AsyncThunkReduxUsage />,
    errorElement: <ErrorBoundry />
  },
  {
    path: routerMenus.use_reducer.path,
    element: <ReactReducer />,
    errorElement: <ErrorBoundry />
  },
  {
    path: routerMenus.table.path,
    element: <Table />,
    errorElement: <ErrorBoundry />
  },
];

const routerElement = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={routerElement}></RouterProvider>;
}
