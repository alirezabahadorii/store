import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // وارد کردن فایل CSS مربوط به AOS
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدت زمان انیمیشن
      easing: 'ease', // نوع انیمیشن
      once: true, // انیمیشن فقط یک بار اجرا شود
    });
  }, []);

  return <Component {...pageProps} />;
}
