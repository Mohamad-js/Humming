import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/component/navbar/page";

const vazirL = localFont({
  src: './../../public/fonts/Shabnam-Bold.ttf',
});


export const metadata = {
  title: "خشکشویی نگین تهران",
  description: "Negin Tehran Dry Cleaning's Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar className={vazirL.className} />
        {children}
      </body>
    </html>
  );
}
