import style from "./page.module.css";
// import localFont from "next/font/local";
import Image from "next/image";
import pic from './../../public/photos/Landing/fixed.jpg'

// const vazirL = localFont({
//   src: './fonts/Vazir-Bold.ttf'
// })

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
      </div>

      <div className={style.services}></div>

      <div className={style.scroller}></div>

    </>
  );
}