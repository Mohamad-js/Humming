import style from './page.module.css'
import './../../app/globals.css'
import localFont from 'next/font/local';

const vazirM = localFont({
   src: './../../../public/fonts/Vazir-light.ttf'
})


function Navbar(){
      
   return(
   <>
      <div className={style.navbar}>
         <ul className={`${vazirM.className} ${style.options}`}>
            <li>صفحه اصلی</li>
            <li>حساب کاربری</li>
            <li>ثبت سفارش</li>
            <li>نمونه کارها</li>
            <li>درباره ما</li>
            <li>ارتباط با ما</li>
         </ul>
      </div>
   </>


   )}
   
   export default Navbar;