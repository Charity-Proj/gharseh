import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";

export const VolunteerHistory = () => {
  const { user } = useContext(UserContext);
  const email = user.email;

  const [volunteerEvens, setVolunteerEvens] = useState([]);

  useEffect(()=>{
    console.log(email);
    try {
      axios.get('http://localhost:5501/api/getVolunteerEvents',{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }}).then((res)=>{
        setVolunteerEvens(res.data);
        console.log(res.data);
      })
    } catch (error) {
      
    }
  },[])

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          سجل التطوع
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          21st Mart 2021 at 10:34 PM
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start rounded bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              {" "}
              الفعاليات
            </p>
            {volunteerEvens.map((data) => (
              <div
                key={data._id}
                className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
              >
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-4 mb-4 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                      {data.name}
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      {/* <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Color: </span> Light Blue
                                        </p> */}
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    {/* <p className="text-base xl:text-lg leading-6">
                                    $36.00 <span className="text-red-300 line-through"> $45.00</span>
                                </p> */}
                    <div className="gap-4">
                      <span className="text-gray-300">تاريخ الفعالية: </span>
                      <p className="text-sm leading-none text-gray-800">
                        {data.startDate}
                      </p>
                    </div>
                    <div className="gap-4">
                      <span className="text-gray-300">مكان الفعالية: </span>
                      <p className="text-sm leading-none text-gray-800">
                        الزرقاء
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
              {/* <div className="pb-4 md:pb-8 me-5 w-full md:w-40">
                                <img className="w-full hidden md:block" src="https://images.pexels.com/photos/16214510/pexels-photo-16214510/free-photo-of-a-decorative-tree-in-a-building-corner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dress" />
                                <img className="w-full md:hidden" src="https://images.pexels.com/photos/16214510/pexels-photo-16214510/free-photo-of-a-decorative-tree-in-a-building-corner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dress" />
                            </div> */}
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-4 mb-4 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    ازرع شجرة
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    {/* <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Color: </span> Light Blue
                                        </p> */}
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  {/* <p className="text-base xl:text-lg leading-6">
                                    $36.00 <span className="text-red-300 line-through"> $45.00</span>
                                </p> */}
                  <div className="gap-4">
                    <span className="text-gray-300">تاريخ الفعالية: </span>
                    <p className="text-sm leading-none text-gray-800">
                      12/6/2023
                    </p>
                  </div>
                  <div className="gap-4">
                    <span className="text-gray-300">مكان الفعالية: </span>
                    <p className="text-sm leading-none text-gray-800">
                      الزرقاء
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
};
