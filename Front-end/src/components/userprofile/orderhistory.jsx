import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";

export default function Orderhistory() {
  const {user} = useContext(UserContext);
  const email = user.email;

  const [donerEvents, setDonerEvents] = useState([]);

  const getDonerEvents = async () => {
    try {
      const data = await axios.get("http://localhost:5501/api/getDonerEvent",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }});
      setDonerEvents(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDonerEvents();
    console.log(donerEvents);
  }, []);
  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          سجل التبرعات
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          21st Mart 2021 at 10:34 PM
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start  px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              {" "}
              الفعاليات
            </p>
            {donerEvents.map((data) => (
              <div
                key={data._id}
                className="mt-4 lg:mt-6 flex p-5 rounded bg-gray-50 flex-col lg:flex-row justify-start items-start lg:items-center lg:space-x-6 xl:space-x-8 w-full "
              >
                <div className="pb-4 lg:pb-8 me-5 w-full lg:w-40">
                  <img
                    className="w-full hidden lg:block"
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80"
                    alt="dress"
                  />
                  <img
                    className="w-full lg:hidden"
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80"
                    alt="dress"
                  />
                </div>
                <div className="border-b border-gray-200 lg:flex-row flex-col flex justify-between items-center w-full  pb-8 space-y-4 lg:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                      {data && data.name}{" "}
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">تاريخ الفعالية: </span>{" "}
                        {data && data.startDate}
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">مكان الفعالية: </span>{" "}
                        عمان
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">حالة الفعالية: </span>{" "}
                        {data && data.active == true && <p>قيد العمل</p>}{" "}
                        {data && data.active == false && <p>مكتملة</p>}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    {/* <p className="text-base xl:text-lg leading-6">
                                        $36.00 <span className="text-red-300 line-through"> $45.00</span>
                                    </p> */}
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      <span className="text-gray-500">عدد الاشجار: </span>
                      {data && data.numberOfTrees}
                    </p>
                    <div className="flex">
                      <span className="text-gray-500">المبلغ: </span>
                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                        {data && data.treePrice}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 lg:mt-6 flex p-5 rounded bg-gray-50 flex-col lg:flex-row justify-start items-start lg:items-center lg:space-x-6 xl:space-x-8 w-full ">
              <div className="pb-4 lg:pb-8 me-5 w-full lg:w-40">
                <img
                  className="w-full hidden lg:block"
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80"
                  alt="dress"
                />
                <img
                  className="w-full lg:hidden"
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80"
                  alt="dress"
                />
              </div>
              <div className="border-b border-gray-200 lg:flex-row flex-col flex justify-between items-center w-full  pb-8 space-y-4 lg:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    عمان خضراء
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">تاريخ الفعالية: </span>{" "}
                      12/6/2023
                    </p>
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">مكان الفعالية: </span>{" "}
                      عمان
                    </p>
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">حالة الفعالية: </span> قيد
                      العمل
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  {/* <p className="text-base xl:text-lg leading-6">
                                        $36.00 <span className="text-red-300 line-through"> $45.00</span>
                                    </p> */}
                  <p className="text-base xl:text-lg leading-6 text-gray-800">
                    <span className="text-gray-500">عدد الاشجار: </span>03
                  </p>
                  <div className="flex">
                    <span className="text-gray-500">المبلغ: </span>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                      36.00 JD
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 lg:mt-4 flex p-5 rounded bg-gray-50 flex-col lg:flex-row justify-start items-start lg:items-center lg:space-x-6 xl:space-x-8 w-full ">
              <div className="pb-4 lg:pb-8 me-5 w-full lg:w-40">
                <img
                  className="w-full hidden lg:block"
                  src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="dress"
                />
                <img
                  className="w-full lg:hidden"
                  src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="dress"
                />
              </div>
              <div className="border-b border-gray-200 lg:flex-row flex-col flex justify-between items-center w-full  pb-8 space-y-4 lg:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    ازرع شجرة
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">تاريخ الفعالية: </span>{" "}
                      12/6/2023
                    </p>
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">مكان الفعالية: </span>{" "}
                      عمان
                    </p>
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">حالة الفعالية: </span>{" "}
                      مكتملة
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  {/* <p className="text-base xl:text-lg leading-6">
                                        $36.00 <span className="text-red-300 line-through"> $45.00</span>
                                    </p> */}
                  <p className="text-base xl:text-lg leading-6 text-gray-800">
                    <span className="text-gray-500">عدد الاشجار: </span>01
                  </p>
                  <div className="flex">
                    <span className="text-gray-500">المبلغ: </span>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                      12.00 JD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
