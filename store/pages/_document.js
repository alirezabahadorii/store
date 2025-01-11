import { Html, Head, Main, NextScript } from "next/document";
import {Menubar} from "@/components/Menubar";
import Contact from "@/components/Contact";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <body className="p-16 rounded gap-6 items-center"
            data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
      <Menubar/>
        <Main />
        <NextScript />
      <Contact/>
      </body>
    </Html>
  );
}
