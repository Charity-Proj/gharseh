import React from 'react'

const Popup = ({toggle, setToggle}) => {
    console.log(toggle)
  return (
 <>
 
 <>
  {/* This is an example component */}
 { toggle && 
 
 <div className="w-full flex items-center justify-center ">

    {/* Main modal */}
    <div
      className="overflow-x-hidden overflow-y-auto bg-gray-400/70 fixed h-modal md:h-full md:inset-0 z-50 justify-center items-center"
    >
      <div className="relative w-full max-w-md px-4 h-full md:h-auto">
        {/* Modal content */}
        <div className="bg-white rounded-lg shadow relative left-[35rem] top-20 dark:bg-gray-700">
          <div className="flex justify-end p-2" dir='rtl'>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
              onClick={() => setToggle(false)}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <form dir='rtl'
            className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
            action="#"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              تطوع الآن
            </h3>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                 الاسم الكامل 
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="البريد الإلكتروني"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                العمر
              </label>
              <input
                type="number"
                name="age"
                id="age"
                placeholder="العمر"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                الجنس
              </label>
              <select id="gender" name="gender" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'>
                <option value="none" selected></option>
                <option value="male">ذكر</option>
                <option value="female">انثى</option>
            </select>
            </div>
       
            <button
              type="submit"
              className="w-full text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              تطوع معنا
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>}
</>

 
 
 
 
 
 </>

  )
}

export default Popup