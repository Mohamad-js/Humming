import style from "./page.module.css";
// import localFont from "next/font/local";
import Image from "next/image";
import pic from './../../public/photos/Landing/main.png'

// const vazirL = localFont({
//   src: './fonts/Vazir-Bold.ttf'
// })

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <Image
          className={style.header_img}
          src={pic}
          alt={'a man tired of washing'}
          priority={true}
          placeholder="blur"
        />
      </div>
      <div className={style.scroller}></div>
    </>
  );
}