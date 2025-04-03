import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Setup from './pages/auth/Setup';
import AdminAccount from './pages/auth/AdminAccount';
import ProductActPage from './pages/auth/ProductActPage';
import Login from './pages/auth/Login';
import Auth from './pages/auth/auth-layout';
import DashboardLayout from './pages/dashboard/dashboard-layout';
import Users from './pages/dashboard/users/Users';
import Profile from './pages/dashboard/users/Profile';
import Store from './pages/dashboard/users/Store';
import Supplier from './pages/dashboard/users/Supplier';
import Dashboardpage from './pages/dashboard/users/Dashboardpage';

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/",
      element: <Auth/>,
      children:[
        {
          path: "/setup",
          element: <Setup/>,
        },
        {
          path: "/adminaccount",
          element: <AdminAccount/>,
        },
        {
          path: "/productactpage",
          element: <ProductActPage/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
      ]
    },
    {
      path:'/dashboard',
      element: <DashboardLayout/>,
      children:[
        {
          path: "",
          element: <Dashboardpage/>,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "store",
          element: <Store />,
        },
        {
          path: "users",
          element: <Users/>,
        },
        {
          path: "supplier",
          element: <Supplier/>,
        },
      ]
    }
   
  ]);
  return <RouterProvider router={router}/>
}
export default App;
