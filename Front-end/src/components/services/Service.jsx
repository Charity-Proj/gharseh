import { Progress } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="grid bg-green-50 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20" dir="rtl">
      {/* CARD */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/600x360"
          />
        </div>
        <div className="p-4">
          <div className="text-lg font-medium text-gray-800  mb-3">
            اسم الفعالية او المكان
          </div>
          <p className="text-gray-600 text-sm">وصف الفعالية 
          </p>
          <p className="text-gray-600 mb-1 text-sm">الهدف: {"5"} دينار من {"100"} دينار</p>
          <Progress value={50} color="green" className="bg-green-200" />
          <div className="flex gap-3 max-w-sm mt-2">
            <Link to={`/Details/${1}`}>
          <button className="py-2.5 px-6 rounded-lg text-sm font-bold bg-green-200 text-teal-800">
              تفاصيل
            </button>
            </Link>
            <Link to='/Payment'><button className="py-2.5 px-6 rounded-lg text-sm font-bold text-white bg-green-600">
              تبرع الآن
            </button></Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Service;
