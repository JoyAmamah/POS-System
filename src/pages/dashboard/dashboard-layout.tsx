import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  PackageCheck,
  LogOut,
  LayoutDashboardIcon,
  UserPen,
  Store,
  UsersRound,
  ChartBarStacked,
  ScanBarcode,
  Package,
  ShoppingCart,
  Proportions,
  BellDot,
} from "lucide-react";

const DashboardLayout = () => {
  const [date, setDate] = useState(new Date());
  const userName = "John Doe";

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="bg-slate-800 flex justify-between items-center px-2 sm:px-4 h-14 text-white">
      <div className="p-2 max-w-xs sm:max-w-[12rem] font-bold text-xs sm:text-sm bg-slate-500 rounded-md text-center sm:block">
        <p>Hi, {userName}!</p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 ml-auto">
          <span className="text-sm sm:text-lg bg-slate-600 px-4 py-2 rounded-md">
            {date.toLocaleTimeString()}
          </span>
          <button className="p-1 sm:p-2 bg-slate-600 rounded-md hover:bg-slate-700">
            <BellDot size={20} sm:size={16} />
          </button>
        </div>
      </div>
      <div className="flex flex-row p-2 min-h-screen">
        <div className="flex flex-grow">
        <div className="w-16 md:w-48 bg-slate-800 text-white flex flex-col p-2 gap-2 rounded-lg transition-all duration-300">
  {[
    { icon: <LayoutDashboardIcon size={24} />, label: "Dashboard", route: "/dashboard" },
    { icon: <Store size={24} />, label: "Stores", route: "/dashboard/store" },
    { icon: <UserPen size={24} />, label: "Users", route: "/dashboard/users" },
    { icon: <UsersRound size={24} />, label: "Suppliers", route: "/dashboard/supplier" },
    { icon: <ChartBarStacked size={24} />, label: "Category", route: "/dashboard/category" },
    { icon: <Package size={24} />, label: "Products", route: "/dashboard/products" },
    { icon: <ScanBarcode size={24} />, label: "Barcode Scanner", route: "/dashboard/barcode" },
    { icon: <ShoppingCart size={24} />, label: "Orders", route: "/dashboard/orders" },
    { icon: <Proportions size={24} />, label: "Report", route: "/dashboard/report" },
    { icon: <PackageCheck size={24} />, label: "Product Activation", route: "/dashboard/product-activation" },
  ].map((item, index) => (
    <Link to={item.route} key={index} className="w-full">
      <button className="group flex items-center md:items-center justify-center md:justify-start gap-3 rounded-md hover:bg-slate-700 transition-all w-full p-2">
        <span>{item.icon}</span>
        <span className="hidden md:block text-sm font-normal">{item.label}</span>
        <span className="absolute left-14 md:hidden bg-slate-800 text-white px-2 py-1 text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200">
          {item.label}
        </span>
      </button>
    </Link>
  ))}

  <button className="relative flex items-center md:items-center justify-center md:justify-start gap-3 text-red-400 hover:text-red-500 hover:bg-slate-700 p-3 rounded-md w-full group">
    <LogOut size={24} />
    <span className="hidden md:block text-sm font-medium">Logout</span>
    <span className="absolute left-14 md:hidden bg-slate-800 text-white px-2 py-1 text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200">
      Logout
    </span>
  </button>
</div>


          <div className="flex-1">
            <Outlet />
          </div>
        </div>

        {/* <div>
        <p>meeeeeeeennnnnneeee</p>
      </div> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
