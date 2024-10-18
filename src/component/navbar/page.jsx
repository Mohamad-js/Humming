import style from './page.module.css'




function Navbar(){
   
   
   return(
   
   <>
      <div className={style.navbar}>
         <div className={style.options}>
            <li>صفحه اصلی</li>
            <li>حساب کاربری</li>
            <li>محصولات</li>
            <li>شعبه ها</li>
            <li>درباره ما</li>
            <li>استخدام</li>
         </div>
      </div>
   </>


   )}
   
   export default Navbar;