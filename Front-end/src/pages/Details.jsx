import { useContext, useEffect, useState } from "react";
import Popup from "../components/Details/Popup";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

function Details() {
  const [toggle, setToggle] = useState(false);
  const [eventDataDetails, setEventDataDetails] = useState([])
  const [isloading, setisloading] = useState()
  const { id } = useParams()
  let { auth, setAuth, refresh } = useContext(AuthContext);

  const handlePopup = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    axios.get(`http://localhost:5501/api/getOneEvent/${id}`)
      .then((res) => {
        setEventDataDetails(res.data)
        setisloading(res.data)
        console.log(res.data);
      }).catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [])
  return (
    <>
      {isloading != null &&
        <section>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img
                  alt="Les Paul"
                  src={eventDataDetails.image}
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>
              <div className="sticky top-8">
                <div className="mt-8 flex justify-between" dir="rtl">
                  <div className="max-w-[35ch] space-y-2">
                    <h1 className="text-xl font-bold sm:text-2xl text-right">
                      {eventDataDetails.name}
                    </h1>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="prose max-w-none">
                    <p className=" text-right">
                      {eventDataDetails.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="prose max-w-none">
                    <p className=" text-right">
                      تاريخ الفعالية : {new Date(eventDataDetails.startDate)?.toISOString().split("T")[0]}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="prose max-w-none">
                    <p className=" text-right">
                      مدة الفعالية : {eventDataDetails.eventLength} ساعات
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="prose max-w-none">
                    <p className=" text-right">
                      عدد المتطوعين المطلوبين : {eventDataDetails.maxVolunteers} شخص
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="prose max-w-none">
                    <p className=" text-right">
                      عدد المتطوعين الى ألان : {eventDataDetails.volunteers.length} شخص
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="prose max-w-none">
                    <p className=" text-right">
                      عدد الاشجار المراد زرعها : {eventDataDetails.numberOfTrees} شجرة
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="prose max-w-none">
                    <p className=" text-right">
                      سعر الشجرة الواحدة : {eventDataDetails.treePrice} دينار
                    </p>
                  </div>
                </div>

                <form className="mt-8">
                  <div className="mt-8 flex  justify-end gap-4">
                    <Link to={`/Payment/${eventDataDetails._id}`}>
                      <button
                        type="submit"
                        className="block rounded bg-green-600 px-5 py-3 text-lg font-medium text-white hover:bg-green-500"
                      >
                        تبرع الان
                      </button>
                    </Link>
                    {/* Modal toggle */}
                    <Link
                      className="block rounded bg-green-600 px-5 py-3 text-lg font-medium text-white hover:bg-green-500"
                      type="button"
                      onClick={auth ? handlePopup : undefined}
                      to={auth ? undefined : '/Login'}
                    data-modal-toggle="authentication-modal"
                    >
                    تطوع الآن
                  </Link>
              </div>
            </form>
          </div>
        </div>
          </div >
        </section >
      }

<Popup toggle={toggle} setToggle={setToggle} />
    </>

  );
}

export default Details;





// <>
//         <div className="py-16 bg-white">
//           <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//             <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//               <div className="md:5/12 lg:w-5/12">
//                 <img
//                   src="https://img.freepik.com/premium-photo/children-s-hands-carefully-holding-young-plant_165146-797.jpg"
//                   alt="image"
//                   loading="lazy"
//                   width=""
//                   height=""
//                 />
//               </div>
//               <div className="md:7/12 lg:w-6/12">

//                 <div className="text-3xl font-black text-gray-800 uppercase dark:text-white text-green-700">
//                   زراعة الأشجار لترسيخ البيئة الخضراء
//                 </div>
//                 <div className="text-3xl font-black text-gray-800 uppercase dark:text-white text-green-700">
//                   12.1044$  الاردن - عمان
//                 </div>
//                 <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
//                   <span className="text-5xl sm:text-7xl "> خدمتنا
//                   </span> </h1>
//                 <p className="mt-6 text-gray-600">
//                   زراعة الأشجار هي واحدة من أهم الإجراءات لترسيخ البيئة الخضراء
//                   والحفاظ على التوازن البيئي. تلعب الأشجار دورًا حيويًا في تحسين
//                   جودة الهواء وتنظيم مناخ الأرض وحماية التنوع البيولوجي
//                   و تحسين جودة الهواء: تعمل الأشجار على امتصاص ثاني أكسيد الكربون وإطلاق
//                   الأكسجين في عملية التمثيل الضوئي. كما تساهم في امتصاص ملوثات
//                   الهواء الأخرى مثل ثاني أكسيد النيتروجين وغازات الكبريت.
//                 </p>
//               </div>
//             </div>

//             <form className="mt-8">
//               <div className="mt-8 flex  justify-end gap-4">
//                 <Link to="/Payment">
//                   <button
//                     type="submit"
//                     className="block rounded bg-green-600 px-5 py-3 text-lg font-medium text-white hover:bg-green-500"
//                   >
//                     تبرع الان
//                   </button>
//                 </Link>
//                 {/* Modal toggle */}
//                 <button
//                   className="block rounded bg-green-600 px-5 py-3 text-lg font-medium text-white hover:bg-green-500"
//                   type="button"
//                   onClick={() => handlePopup()}
//                   data-modal-toggle="authentication-modal"
//                 >
//                   تطوع الآن
//                 </button>
//               </div>
//             </form>

//           </div>
//         </div>
//         <Popup toggle={toggle} setToggle={setToggle} />

//       </>