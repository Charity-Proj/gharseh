import { useState } from "react"
import Popup from "../components/Details/Popup"

function Details() {
    const [ toggle, setToggle ] = useState(false)
    const handlePopup = () => {
        setToggle(!toggle);
    }

    return (
      <>
  
  <section>
    <div className="relative mx-auto max-w-screen-xl px-4 py-8">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img
            alt="Les Paul"
            src="https://assabeel.net/Uploads/Models/Media/Images/2018/3/1/-1229544948.jpg"
            className="aspect-square w-full rounded-xl object-cover"
          />
  
          <div className="grid grid-cols-2 gap-4 lg:mt-4">
            <img
              alt="Les Paul"
              src="https://assabeel.net/Uploads/Models/Media/Images/2018/2/6/383461422.jpg"
              className="aspect-square w-full rounded-xl object-cover"
            />
  
            <img
              alt="Les Paul"
              src="https://www.dampress.net/photo//zeraa/green-houses.jpg"
              className="aspect-square w-full rounded-xl object-cover"
            />
  
            <img
              alt="Les Paul"
              src="https://scontent.famm12-1.fna.fbcdn.net/v/t1.6435-9/176578539_3761680667263048_3170040103351585609_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFbgCts6yGZuy8Rze9OhAlnaV3zhtwdL5hpXfOG3B0vmEtnghckuSqYchiUWwP-QAcyU8joZTsB0WG_JSf2q_bg&_nc_ohc=B0MmqCZhSvMAX_Oyhgq&_nc_ht=scontent.famm12-1.fna&oh=00_AfColbuSLTavl_AXc2JdblPDLroabz7GqbvGBuzCLYqsCQ&oe=64B2F17A"
              className="aspect-square w-full rounded-xl object-cover"
            />
  
            <img
              alt="Les Paul"
              src="https://cdn.wikifarmer.com/wp-content/uploads/2022/05/%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%B7%D9%85%D8%A7%D8%B7%D9%85-%D9%81%D9%8A-%D8%A7%D9%84%D8%AD%D9%82%D9%88%D9%84-%D8%A7%D9%84%D9%85%D9%83%D8%B4%D9%88%D9%81%D8%A9-%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82-%D8%A7%D9%84%D8%B1%D8%A8%D8%AD-%E2%80%93-%D8%AF%D9%84%D9%8A%D9%84-%D9%83%D8%A7%D9%85%D9%84-%D8%B9%D9%86-%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%B7%D9%85%D8%A7%D8%B7%D9%85-%D9%81%D9%8A-%D8%A7%D9%84%D8%AD%D9%82%D9%88%D9%84-%D8%A7%D9%84%D9%85%D9%83%D8%B4%D9%88%D9%81%D8%A9.jpg"
              className="aspect-square w-full rounded-xl object-cover"
            />
          </div>
        </div>
  
        <div className="sticky top-8">
        
          <div className="mt-8 flex justify-between" dir="rtl">
            <div className="max-w-[35ch] space-y-2">
              <h1 className="text-xl font-bold sm:text-2xl text-right">
              زراعة الأشجار لترسيخ البيئة الخضراء </h1>
            </div>
  
  
          </div>
  <br /><br /><br /><br />
          <div className="mt-4">
            <div className="prose max-w-none">
              <p className=" text-right">
              نحن ندعوكم للانضمام إلينا في حدث زراعة الأشجار لترسيخ البيئة الخضراء. إن هذا الحدث هو جهودنا المشتركة لتحقيق التوازن البيئي والحفاظ على جمال الطبيعة في مجتمعنا.
  
  ستقام هذه الفعالية في [اسم الموقع] يوم [تاريخ الحدث] حيث سيجتمع المشاركون من مختلف الأعمار والخلفيات للمساهمة في زراعة الأشجار وبناء مستقبل أفضل للأجيال القادمة.
  
  خلال هذا الحدث، ستحصل على فرصة للتواصل مع الطبيعة والمساهمة في تحسين بيئتنا. سيتم توفير جميع الأدوات والمواد اللازمة لزراعة الأشجار وسيقوم خبراء بتقديم التوجيه والإرشاد خلال عملية الزراعة.
  
  سواء كنت تمتلك خبرة في زراعة الأشجار أم لا، فإن هذا الحدث يقدم فرصة مثالية للتعلم والمشاركة في نشاط بناء البيئة. ستتعرف على أنواع مختلفة من الأشجار المحلية وأهميتها في تنظيم المناخ وتوفير الظل وتحسين جودة الهواء.
  
  إن زراعة الأشجار لها العديد من الفوائد، بما في ذلك تحسين البيئة العامة، وتعزيز التنوع البيولوجي، ومكافحة التصحر، وتوفير الظل والجمال الطبيعي للمناطق المحيطة. ستكون مساهمتكم في هذا الحدث بمثابة إرث بيئي للأجيال القادمة.
  
  انضموا إلينا في حدث زراعة الأشجار وكونوا جزءًا من الحركة البيئية لبناء مج
              </p>
            </div>
  
          </div>
  
          <form className="mt-8">
         
  
            <div className="mt-8 flex  justify-end gap-4">
              <button
                type="submit"
                className="block rounded bg-green-600 px-5 py-3 text-lg font-medium text-white hover:bg-green-500"
              >
                تبرع الان
              </button>
                {/* Modal toggle */}
                <button
                className="block rounded bg-green-600 px-5 py-3 text-lg font-medium text-white hover:bg-green-500"
                type="button"
                onClick={() => handlePopup()}
                data-modal-toggle="authentication-modal"
                >
                تطوع الآن
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

<Popup toggle={toggle} setToggle={setToggle} />
  
      </>
    )
  }
  
  export default Details
  