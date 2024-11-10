'use client'
import { useEffect, useRef } from 'react';
import style from './page.module.css'
import './../../app/globals.css'
import localFont from 'next/font/local';

const vazirl = localFont({
   src: './../../../public/fonts/Vazir-light.ttf'
})

const vazirm = localFont({
   src: './../../../public/fonts/Vazir-Medium.ttf'
})

function Navbar(){
   const navbar = useRef(null)

   useEffect(() => {
      let lastScrollTop = 0;
      window.addEventListener('scroll', () => {
         const scroll = window.scrollY;

         if(scroll > 300 && scroll < 400) {
            navbar.current.style = `
            background-color: rgba(255, 255, 255, 1);
            box-shadow: 0.5px 0.5px 15px 2px black;
            `

         } else if(scroll > 400) {
            const scrollTop = document.documentElement.scrollTop;
            scrollTop > lastScrollTop ?
            navbar.current.style.top = '-100px'
            :
            navbar.current.style.top = '0';
            lastScrollTop = scrollTop;

         } else {
            navbar.current.style = `
            background-color: rgba(255, 255, 255, 0);
            box-shadow: 0px 0px 0 0 black;
            `
         }
      })
   }, [])
      
   return(
   <>
      <div className={style.logoHolder}>
         <div className={style.circle}></div>
         <svg viewBox="0 0 641 690">
            <path className={style.hummingBird} d="M26.8344 4.94287C16.4344 -4.25713 14.1677 4.7762 14.3344 10.4429C10.7343 83.6429 35.5011 157.276 48.3345 184.943C79.7023 270.582 165.609 311.102 218.665 336.127L219.334 336.443C219.825 336.726 220.298 337.003 220.754 337.274C232.403 344.211 233.184 347.688 229.334 353.943L202.834 392.943C171.334 437.943 165.34 469.782 151.334 500.443C132.834 540.943 78.8345 593.443 59.3345 615.943C39.8345 638.443 12.8343 660.443 3.83431 677.443C-3.36569 691.043 4.83431 689.776 9.83431 687.443C68.3343 654.943 144.334 566.943 150.334 571.443C148.001 578.61 143.134 594.843 142.334 602.443C141.534 610.043 144.668 607.943 146.334 605.943C171.334 572.443 232.834 504.143 300.834 490.943C368.834 477.743 407.501 424.443 418.334 399.443C428.834 380.443 430.334 363.443 446.334 322.443C484.834 211.943 577.834 197.943 634.834 181.943C640.034 180.343 640.157 178.749 639.834 177.943C639.034 175.943 636.337 175.905 634.834 175.943C614.834 176.443 552.334 189.943 520.334 199.943C509.934 203.543 507.901 196.443 504.834 192.943C470.834 154.143 411.834 192.943 391.334 215.943C380.134 208.343 365.001 161.776 358.834 139.443C348.334 95.4429 327.334 61.4429 315.334 37.4429C306.334 19.9429 309.834 25.9429 306.834 19.4429C304.434 14.2429 300.501 17.9429 298.834 20.4429C285.834 37.9429 267.834 130.443 265.334 155.443C260.134 189.043 282.834 209.443 300.834 225.443C293.334 223.943 233.404 170.859 165.834 125.443C74.3345 63.9429 44.3345 18.9429 28.5139 6.52945C27.9246 5.94243 27.3659 5.41311 26.8344 4.94287Z"/>
         </svg>
      </div>

      <div className={style.navbar} ref={navbar}>

         <ul className={`${vazirl.className} ${style.right}`}>
            <li>خانه</li>
            <li>طراحی وب </li>
            <li>طراحی اپلیکیشن</li>
            <li>قیمت ها</li>
            <li>دوره های آموزشی</li>
            <li>بیشتر
               <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"/>
               </svg>
               <div className={style.more}>
                  <div className={style.moreOptions}>همکاری با ما</div>
                  <div className={style.moreOptions}>نمونه کار</div>
                  <div className={style.moreOptions}>سوالات پرتکرار</div>
                  <div className={style.moreOptions}>درباره ی ما</div>
                  <div className={style.moreOptions}>ارتباط با ما</div>
               </div>
            </li>
         </ul>


         <ul className={`${vazirl.className} ${style.left}`}>
            <li>همکاری با ما</li>
            <li>نمونه کار</li>
            <li>سوالات پرتکرار</li>
            <li>درباره ی ما</li>
            <li>ارتباط با ما</li>
         </ul>

      </div>

   </>


   )}
   
   export default Navbar;