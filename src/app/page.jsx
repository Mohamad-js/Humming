import style from "./page.module.css";
import localFont from "next/font/local";
import Image from "next/image";
import pic from './../../public/photos/Landing/main.png'

const vazirb = localFont({
  src: './fonts/Vazir-Bold.ttf'
})

const vazirl = localFont({
  src: './fonts/Vazir-light.ttf'
})

export default function Home() {


  return (
   <>
      <div className={style.headerContainer}>
         <Image
            className={style.header_img}
            src={pic}
            alt={'a man tired of washing'}
            priority={true}
            placeholder="blur"
         />

         <div className={style.headerBar}>
            <div className={style.titleHolder}>
               <h1 className={`${style.title} ${vazirb.className}`}>هامینگ</h1>
               <p className={`${style.slogan} ${vazirl.className}`}>نقطه اوج کسب و کار</p>
            </div>
            <h2 className={`${style.info} ${vazirl.className}`}>طراحی و برنامه نویسی انواع سایت و اپلیکیشن</h2>
            <div className={style.btnHolder}>
               <button className={`${style.register} ${vazirl.className}`}>ثبت سفارش
               <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                  <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"/>
               </svg>
               </button>
            </div>
         </div>


      </div>

         <div className={style.services}>
            <div className={`${style.designHolder} ${vazirb.className}`}>
               <div className={style.site}>
                  <h1>طراحی سایت</h1>
               </div>
               <div className={style.app}>
                  <h1>طراحی اپلیکیشن</h1>
               </div>
               <div className={style.wpa}>
                  <h1>طراحی وب اپ</h1>
               </div>
            </div>
         </div>

      <div className={style.scroller}></div>
   </>
  );
}