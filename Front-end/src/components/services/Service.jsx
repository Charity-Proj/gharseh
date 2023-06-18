import { Progress } from "@material-tailwind/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Service = ({ search }) => {
  const [eventData, setEventData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5501/api/getEvents')
      .then((res) => {
        setEventData(res.data)
        console.log(res.data);
      }).catch((error) => {
        console.error("Error fetching data:", error);
      });
    console.log(eventData);
  }, [])
  return (
    <div className="grid bg-green-50 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20" dir="rtl">
      {/* CARD */}
      {eventData.map((event) => {
        if (search === "") {
          return (
            <div className="bg-white rounded-xl shadow-md overflow-hidden " key={event._id}>
              <div className="relative">
                <img
                  className="w-full h-72 object-cover"
                  src={event.image}
                />
              </div>
              <div className="p-4">
                <div className="text-5xl font-medium text-gray-800  mb-3">
                  {event.name}
                </div>
                <p className="text-gray-600 text-sm">
                  {/* {event.description} */}
                </p>
                <p className="text-gray-600 mb-1 text-sm">الهدف : زراعة {event.numberOfTrees} شجرة</p>
                <p className="text-gray-600 mb-1 text-sm">المبلغ: {"5"} دينار من {event.numberOfTrees * event.treePrice} دينار</p>
                <Progress value={(5 / (event.numberOfTrees * event.treePrice)) * 100} color="green" className="bg-green-200" />
                <div className="flex gap-3 max-w-sm mt-2">
                  <Link to={`/Details/${event._id}`}>
                    <button className="py-2.5 px-6 rounded-lg text-sm font-bold bg-green-200 text-teal-800">
                      تفاصيل
                    </button>
                  </Link>
                  <Link to={`/Payment/${event._id}`}><button className="py-2.5 px-6 rounded-lg text-sm font-bold text-white bg-green-600">
                    تبرع الآن
                  </button></Link>
                </div>
              </div>
            </div>
          )
        } else if (event.name.includes(search)) {
          return (
            <div className="bg-white rounded-xl shadow-md overflow-hidden " key={event._id}>
              <div className="relative">
                <img
                  className="w-full h-96 object-cover"
                  src={event.image}
                />
              </div>
              <div className="p-4">
                <div className="text-5xl font-medium text-gray-800  mb-3">
                  {event.name}
                </div>
                <p className="text-gray-600 text-sm">
                  {event.description}
                </p>
                <p className="text-gray-600 mb-1 text-sm">الهدف : زراعة {event.numberOfTrees} شجرة</p>
                <p className="text-gray-600 mb-1 text-sm">المبلغ: {"5"} دينار من {event.numberOfTrees * event.treePrice} دينار</p>
                <Progress value={(5 / (event.numberOfTrees * event.treePrice)) * 100} color="green" className="bg-green-200" />
                <div className="flex gap-3 max-w-sm mt-2">
                  <Link to={`/Details/${event._id}`}>
                    <button className="py-2.5 px-6 rounded-lg text-sm font-bold bg-green-200 text-teal-800">
                      تفاصيل
                    </button>
                  </Link>
                  <Link to={`/Payment/${event._id}`}><button className="py-2.5 px-6 rounded-lg text-sm font-bold text-white bg-green-600">
                    تبرع الآن
                  </button></Link>
                </div>
              </div>
            </div>
          )
        }
      })}

    </div>
  );
};

export default Service;
