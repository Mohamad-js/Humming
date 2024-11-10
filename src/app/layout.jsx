import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/component/navbar/page";
import SmoothScrolling from "@/component/lenis/SmoothScrolling";

const vazirL = localFont({
  src: './../../public/fonts/Shabnam-Bold.ttf',
});


export const metadata = {
  title: "شرکت مهندسی نرم افزار هامینگ",
  description: "Negin Tehran Dry Cleaning's Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <SmoothScrolling>
          <Navbar className={vazirL.className} />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
