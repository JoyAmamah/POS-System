import React from "react";
import { useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logo.jpg";

const Dashboardpage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col">
  

      <section className="flex flex-col items-center text-center py-16 px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Welcome to Multi Store (POS)
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Discover the best shopping experience with our top-quality products
          and services.
        </p>
        <div className="mt-6 flex gap-4"></div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Fast Delivery",
              desc: "Get your orders delivered in record time.",
            },
            {
              title: "Quality Products",
              desc: "Only the best and most reliable items for you.",
            },
            {
              title: "24/7 Support",
              desc: "Our team is always here to help you.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-md text-center"
            >
              <h3 className="text-xl font-bold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="w-full h-full bg-slate-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} pos. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboardpage;
