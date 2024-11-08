// 'use client'
import style from "./page.module.css"
import {use} from 'react'

function Product({params}) {

   const paramsContent = use(params)

   console.log(paramsContent)

   return(
      <>
         <h1 className={style.background}>مشخصه داینامیک هر محصول</h1>
      </>
   )
}

export default Product;