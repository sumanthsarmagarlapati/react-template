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
// "react-router-dom": "^7.9.1", // for app.tsx routes declaration
// "react-dom": "^19.1.1", // main.tsx routerDom and env declarations


const DashBoard = lazy(() => import("./pages/Dashboard/dashboard"));
const ReduxUsage = lazy(() => import("./pages/redux/reduxUsage"));
const ZodForm = lazy(() => import("./pages/forms/zod-register-form"));
const AsyncThunkReduxUsage = lazy(
  () => import("./pages/AsyncThunkRedux/async-thunk-redux-usage"),
);
const ReactReducer = lazy(() => import("./pages/Reducer/reducer"));
const Table = lazy(() => import("./pages/Table/table"));
const Model = lazy(() => import("./pages/Model/model"));
const UseMemo = lazy(() => import("./pages/useMemo/useMemo"));
const UsecallBack = lazy(() => import("./pages/useMemo/useCallback"));
const Bounce = lazy(() => import("./pages/Debounce/debounce"));

const routes: RouteObject[] = [
  { path: "/", element: <Navigate to={routerMenus.dashboard.path} /> },
  {
    path: routerMenus.dashboard.path,
    element: <DashBoard />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: routerMenus.redux_usage.path,
    element: <ReduxUsage />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: routerMenus.zod_form.path,
    element: <ZodForm />,
  },
  {
    path: routerMenus.async_thunk_redux_usage.path,
    element: <AsyncThunkReduxUsage />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: routerMenus.use_reducer.path,
    element: <ReactReducer />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: routerMenus.table.path,
    element: <Table />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: routerMenus.model.path,
    element: <Model />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: routerMenus.use_memo.path,
    element: <UseMemo />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: routerMenus.use_callback.path,
    element: <UsecallBack />,
    errorElement: <ErrorBoundry />,
  },
  {
    path: routerMenus.debounce.path,
    element: <Bounce />,
    errorElement: <ErrorBoundry />,
  },
];

const routerElement = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={routerElement}></RouterProvider>;
}
