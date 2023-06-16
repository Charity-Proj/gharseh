import React from "react";

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
          <div className="text-lg font-medium text-gray-800  mb-2">
            اسم الفعالية او المكان
          </div>
          <p className="text-gray-500 text-sm">وصف الفعالية </p>
          <div className="flex gap-3 max-w-sm mt-2">
          <button className="py-2.5 px-6 rounded-lg text-sm font-bold bg-green-200 text-teal-800">
              تفاصيل
            </button>
            <button className="py-2.5 px-6 rounded-lg text-sm font-bold text-white bg-green-600">
              تبرع الآن
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Service;
